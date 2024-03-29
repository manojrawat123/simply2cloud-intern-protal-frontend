import React, { useContext, useEffect, useState } from 'react'
import NoDataPage from '../../../Component/NoDataPage/NoDataPage';
import JobPostModal from './JobsPost/JobsPostModal/JobPostModal';
import { DataContext } from '../../../context';
import JobCard from './JobDisplay/DisplayJobsCard';
import { ToastContainer } from 'react-toastify';
import LoadingPage from '../../../Component/LoadingPage/LodingPage';

const CompanyJobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getJobsPostedByCompanyFunc, jobPostedByCompany } = useContext(DataContext);

  useEffect(() => {
    getJobsPostedByCompanyFunc();
  }, [])

  if (!jobPostedByCompany) {
    return <LoadingPage />
  }
  return (
    <>
      <ToastContainer />
      <JobPostModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      {
        jobPostedByCompany?.length == 0 ?
          <div className='h-[65vh] flex items-center justify-center'>
            <NoDataPage domain={"No Job Posted By You"} />
          </div>
          :
          <div className='mx-[2rem] my-[2rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10'>
            {jobPostedByCompany?.map((element, index) => {
              return <JobCard key={index} jobs={element} />
            })}
          </div>
      }


      <div className="flex justify-center items-center py-4">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        >
          Post Jobs
        </button>
      </div>
    </>
  );
}

export default CompanyJobs
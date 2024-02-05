import React, { useContext, useEffect, useState } from 'react'
import NoDataPage from '../../../Component/NoDataPage/NoDataPage';
import JobPostModal from './JobsPost/JobsPostModal/JobPostModal';
import { DataContext } from '../../../context';
import JobCard from './JobDisplay/DisplayJobsCard';

const CompanyJobs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const {getJobsPostedByCompanyFunc,jobPostedByCompany} = useContext(DataContext);

    useEffect(()=>{
      getJobsPostedByCompanyFunc();
    },[])
    return (
      <>
  
      <JobPostModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
  
        <div className="h-[50vh] mt-20">

{
  jobPostedByCompany?.length == 0 ?
  <NoDataPage domain={"No Job Posted By You"}/> :
  jobPostedByCompany?.map(()=>{
    return <JobCard />
  })

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
        </div>
      </>
    );
}

export default CompanyJobs
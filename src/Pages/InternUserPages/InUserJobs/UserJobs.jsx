import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context";
import NoDataPage from "../../../Component/NoDataPage/NoDataPage";
import JobCard from "../../BothUserPages/JobCard/JobCards";
import LoadingPage from "../../../Component/LoadingPage/LodingPage";
import InternJobSearchBySlug from "./InJobSearch/InJobSrchBySlug";
import InternJobSearchByLocation from "./InJobSearch/InJobSrchL";
import InternJobSearchByCategoery from "./InJobSearch/inJobSrchByCateg";
import { ToastContainer } from "react-toastify";

const UserJobs = () => {
  const {
    getJobsForStudentFunc,
    studentJobsObj,
    searchTitleSlugsObj,
    searchLocationSlugObj,
    jobCategoeryOpt,
  } = useContext(DataContext);

  const [filteredJobs, setFilteredJobs] = useState();
  const [isFilter, setIsFilter] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedTitle, setSelectedTitle] = useState();
  const [selectedCategoery, setSelectedCategoery] = useState();

  useEffect(() => {
    getJobsForStudentFunc();
  }, []);

  if (!studentJobsObj) {
    return <LoadingPage />;
  }
  // else if(isFilter && !filteredJobs){
  //   return <LoadingPage />
  // }

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center mt-10 space-x-10">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <InternJobSearchByCategoery
            jobCategoeryOpt={jobCategoeryOpt}
            studentJobsObj={studentJobsObj}
            setIsFilter={setIsFilter}
            setFilteredJobs={setFilteredJobs}
            selectedLocation={selectedLocation}
            selectedTitle={selectedTitle}
            setSelectedCategoery={setSelectedCategoery}
            selectedCategoery={selectedCategoery}
          />

          <InternJobSearchBySlug
            searchTitleSlugsObj={searchTitleSlugsObj}
            studentJobsObj={studentJobsObj}
            setIsFilter={setIsFilter}
            setFilteredJobs={setFilteredJobs}
            selectedLocation={selectedLocation}
            setSelectedTitle={setSelectedTitle}
            selectedTitle={selectedTitle}
            selectedCategoery={selectedCategoery}
          />
          <InternJobSearchByLocation
            searchLocationSlugObj={searchLocationSlugObj}
            studentJobsObj={studentJobsObj}
            setIsFilter={setIsFilter}
            setFilteredJobs={setFilteredJobs}
            selectedLocation={selectedLocation}
            selectedTitle={selectedTitle}
            setSelectedLocation={setSelectedLocation}
            selectedCategoery={selectedCategoery}
          />
        </div>
      </div>

      {!isFilter ? (
        studentJobsObj?.length == 0 ? (
          <div className="h-[65vh] flex items-center justify-center">
            <NoDataPage domain={"No Job Posted By You"} />
          </div>
        ) : (
          <div className="mx-[2rem] my-[2rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
            {studentJobsObj?.map((element, index) => {
              return <JobCard key={index} jobs={element} />;
            })}
          </div>
        )
      ) : !filteredJobs ? (
        <LoadingPage />
      ) : filteredJobs?.length == 0 ? (
        <div className="h-[65vh] flex items-center justify-center">
          <NoDataPage domain={"No Job Posted You Search Here"} />
        </div>
      ) : (
        <div className="mx-[2rem] my-[2rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
          {filteredJobs?.map((element, index) => {
            return <JobCard key={index} jobs={element} />;
          })}
        </div>
      )}
    </>
  );
};

export default UserJobs;

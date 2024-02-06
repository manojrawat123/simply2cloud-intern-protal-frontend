import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context";
import NoDataPage from "../../../Component/NoDataPage/NoDataPage";
import JobCard from "../../BothUserPages/JobCard/JobCards";
import InternJobSearch from "./InternJobSearch/InternJobSearchByTitle";
import InternJobSearchByLocation from "./InternJobSearch/InternJobSearchByLocation";
import LoadingPage from "../../../Component/LoadingPage/LodingPage";

const UserJobs = () => {
  const {
    getJobsForStudentFunc,
    studentJobsObj,
    searchTitleSlugsObj,
    searchLocationSlugObj,
  } = useContext(DataContext);

  // const  = useState();
  const [filteredJobs, setFilteredJobs] = useState();
  const [isFilter, setIsFilter] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedTitle, setSelectedTitle] = useState();

  useEffect(() => {
    getJobsForStudentFunc();
  }, []);



if(!studentJobsObj){
  return <LoadingPage />
}
// else if(isFilter && !filteredJobs){
//   return <LoadingPage />
// }


  return (
    <>
      <div className="flex items-center justify-center mt-10 space-x-10">
        <InternJobSearch
          searchTitleSlugsObj={searchTitleSlugsObj}
          studentJobsObj={studentJobsObj}
          setIsFilter={setIsFilter}
          setFilteredJobs={setFilteredJobs}
          selectedLocation={selectedLocation}
          setSelectedTitle={setSelectedTitle}
          selectedTitle={selectedTitle}
        />
        <InternJobSearchByLocation
          searchLocationSlugObj={searchLocationSlugObj}
          studentJobsObj={studentJobsObj}
          setIsFilter={setIsFilter}
          setFilteredJobs={setFilteredJobs}
          selectedLocation={selectedLocation}
          selectedTitle={selectedTitle}
          setSelectedLocation={setSelectedLocation}
          
        />
      </div>

      {!isFilter ? 
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
      : !filteredJobs ? <LoadingPage /> :
      filteredJobs?.length == 0 ? (
        <div className="h-[65vh] flex items-center justify-center">
          <NoDataPage domain={"No Job Posted You Search Here"} />
        </div>
      ) : (
        <div className="mx-[2rem] my-[2rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
          {filteredJobs?.map((element, index) => {
            return <JobCard key={index} jobs={element} />
          })}
        </div>
      )}
    </>
  );
};

export default UserJobs;

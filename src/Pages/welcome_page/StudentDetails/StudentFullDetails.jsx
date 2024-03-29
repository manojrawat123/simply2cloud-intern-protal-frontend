import React, { useContext, useEffect, useState } from "react";
import background from "../../../image/background.jpg";
import { DataContext } from "../../../context";
import { useParams } from "react-router-dom";
import UserSkillsCard from "../../BothUserPages/UserSkillsCard/UserSkillsDetailCd";
import Heading from "../../../RepeatedCode/tags/Heading";
import NormalH from "../../../RepeatedCode/tags/NormalH";
import noUsr from "../../../image/nousr.jpg";
import LoadingPage from "../../../Component/LoadingPage/LodingPage";
import API_BASE_URL from "../../../config";
import SkillSection from "./Sections/SkillSection";
import UserExperienceCard from "../../BothUserPages/UserExperienceCard/UserExperienceCard";
import ExperienceSection from "./Sections/Experience/Experience";
import PhotoSlider from "./Sections/PhotosSlider/PhotoSlider";
import NoDataPage from "../../../Component/NoDataPage/NoDataPage";

const StudentFullDetails = () => {
  const { internProfileFullDetailsFunc, internProfileFullDetails } =
    useContext(DataContext);
  const { id } = useParams();
  const [tabIndex, setTabIndex] = useState(1);

  useEffect(() => {
    internProfileFullDetailsFunc(id);
  }, []);

  const tabButton = [
    {
      id: 1,
      label: "Skills",
      content : 
        internProfileFullDetails?.profile_details?.skills?.length != 0 ? (
          <SkillSection
            internProfileFullDetail={internProfileFullDetails?.profile_details}
          />
        ) : <NoDataPage />
        
    },
    {
      id: 2,
      label: "Education",
      content :   internProfileFullDetails?.experience_details.length != 0 ? (
        <ExperienceSection
          experiences={internProfileFullDetails?.experience_details}
        />
      ) : <NoDataPage />
    },
    {
      id: 3,
      label: "Portfolio",
      content : internProfileFullDetails?.profile_details?.skills?.length != 0 ? (
        <PhotoSlider skills={internProfileFullDetails?.profile_details.skills} /> ) : <NoDataPage /> 
      
    },
  ]

  const buttonArr = [
    {
      id: 1,
      label: "Github Profile",
      link: internProfileFullDetails?.profile_details?.github_profile,
      image: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 15h2v2h-2zm0-10h2v6h-2z" />
      </svg>
    },
    {
      id: 2,
      label: "Linkdin Profile",
      link: internProfileFullDetails?.profile_details?.linkedin_profile,
      image: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10.9998V13.9998M17 13.9998C17 14.7955 16.7946 15.5492 16.2678 16.0761C15.741 16.603 14.9873 16.8083 14.1916 16.6194C13.3959 16.4305 12.7316 15.8799 12 15.1764C11.2684 15.8799 10.6041 16.4305 9.80843 16.6194C9.01269 16.8083 8.259 16.603 7.73223 16.0761C7.20546 15.5492 7 14.7955 7 13.9998M17 13.9998C17 13.204 17.205 12.4502 17.7318 11.9229C18.2585 11.3957 19.0122 11.1905 19.8079 11.3794C20.6036 11.5683 21.2679 12.1189 22 12.8223C22.7316 12.1189 23.3959 11.5683 24.1916 11.3794C24.9873 11.1905 25.741 11.3957 26.2678 11.9229C26.7946 12.4502 27 13.204 27 13.9998V21.9998H23V13.9998C23 13.204 22.7946 12.4502 22.2678 11.9229C21.741 11.3957 20.9873 11.1905 20.1916 11.3794C19.3959 11.5683 18.7316 12.1189 18 12.8223C17.2684 12.1189 16.6041 11.5683 15.8084 11.3794C15.0127 11.1905 14.259 11.3957 13.7322 11.9229C13.2055 12.4502 13 13.204 13 13.9998" />
      </svg>
    },
    {
      id: 3,
      label: "Portfolio",
      link: internProfileFullDetails?.profile_details?.portfolio_link,
      image: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 6h18v2H3zm0 6h18v2H3zm0 6h18v2H3z" />
      </svg>
    }

  ]

  if (!internProfileFullDetails?.profile_details) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {console.log(internProfileFullDetails)}
      <div className="container sm:mx-auto sm:p-8 py-8 px-2">
        <div className="bg-white p-6 rounded shadow-md my-4">
          <div className="flex items-center mb-6 relative mt-10 md:mt-0">
            <img src={background} alt="" className="hidden sm:block" />
            <img
              src={
                internProfileFullDetails?.profile_details.user_image != null
                  ? `${API_BASE_URL}/${internProfileFullDetails?.profile_details.user_image}`
                  : noUsr
              }
              alt={name}
              className="rounded-full md:h-[12rem] md:w-[12rem] w-[8rem] h-[8rem]  md:mt-0 mr-6 absolute border-2 border-white border-solid bottom-[-4rem] left-10"
            />
          </div>
          <div className="mt-[5rem]">
            <h1 className="md:text-3xl font-bold sm:text-xl text-lg">
              {internProfileFullDetails?.profile_details?.intern.name}
            </h1>
            <p className="text-gray-600 font-semibold text-xs">
              {
                internProfileFullDetails?.profile_details?.job_categoery
                  .job_category
              }{" "}
              (
              {
                internProfileFullDetails?.profile_details?.sub_categoery
                  .sub_category_name
              }
              )
            </p>
            <p>
              {internProfileFullDetails?.profile_details?.desc
                ?.split("\n")
                .map((element, index) => {
                  return <div key={index}>{element}</div>;
                })}
            </p>
          </div>



          {internProfileFullDetails?.profile_details?.intern?.phone ?
            <>
              {buttonArr.map((element, index) => {
                return (
                  <div key={index}>
                    {/* {element.image}   */}
                    <a href={element.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      {element.label}
                    </a>
                  </div>
                )
              })}

              <div className="">
                <div>Phone : {internProfileFullDetails?.profile_details?.intern.phone}</div>
                <div>Email : {internProfileFullDetails?.profile_details?.intern.email}</div>
              </div>
            </>
            : null}
        </div>


        <div className="my-4">
          {tabButton.map((element, index) => {
            return <button
              onClick={() => {
                setTabIndex(element.id);
              }}
              className={` rounded-xl mx-2 font-semibold py-2 px-4 border-2 border-blue-500 hover:bg-blue-500 hover:text-white ${element.id == tabIndex ? 'bg-blue-500 text-white' : 'text-blue-500'}`}>
              {element.label}
            </button>
          })}
        </div>

        {tabButton.map((element, index)=>{
          return element.id == tabIndex ? element.content : null
        })}
        {/* Skills Section */}
        {/* {
        internProfileFullDetails?.profile_details.length != 0 ? (
          <SkillSection
            internProfileFullDetail={internProfileFullDetails?.profile_details}
          />
        ) : <NoDataPage />
        }

        <PhotoSlider skills={internProfileFullDetails?.profile_details.skills} />
        {internProfileFullDetails?.experience_details.length != 0 ? (
          <ExperienceSection
            experiences={internProfileFullDetails?.experience_details}
          />
        ) : <NoDataPage />
        } */}


      </div>
    </div>
  );
};

export default StudentFullDetails;

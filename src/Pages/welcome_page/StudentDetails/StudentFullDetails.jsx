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
import InContact from "./Sections/ContactTab/InContact";
import InAboutTab from "./Sections/InAboutTab/InAboutTab";
import InSkills from "./Sections/InSkills/InSkills";
import InExperience from "./Sections/InExperience/InExperience";
import TestimonialSlides from "./Sections/PortfolioSlides/PortfolioSlides";
import { CloseOutlined } from "@mui/icons-material";


const StudentFullDetails = () => {

  const { internProfileFullDetailsFunc, internProfileFullDetails } =
    useContext(DataContext);
  const { id } = useParams();
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);

  useEffect(() => {
    internProfileFullDetailsFunc(id);
  }, []);





  if (!internProfileFullDetails?.profile_details) {
    return <LoadingPage />;
  }


  return (
    <>
      <div className="grid md:grid-cols-8 grid-cols-1 w-[95%] md:w-[85%] mx-auto gap-10 mt-10">
        <div className="col-span-5 ">
          <InAboutTab internProfileFullDetails={internProfileFullDetails} />
          <InExperience internProfileFullDetails={internProfileFullDetails} />
          <InSkills internProfileFullDetails={internProfileFullDetails} />
          <TestimonialSlides internProfileFullDetails={internProfileFullDetails} />
          {/* <PhotoSlider skills={internProfileFullDetails.profile_details.skills} /> */}
        </div>
        <div className="col-span-3 rounded-xl  hidden md:block">
          <div className="border-2 rounded-xl border-solid border-gray-400 shadow-xl px-8 py-4 lg:sticky lg:top-[2rem]">
            <InContact internProfileFullDetails={internProfileFullDetails} />
          </div>
        </div>
      </div>
      
      <div className=" md:hidden ">
      { 
showContactInfo ? 
        <div className="border rounded-xl border-solid border-gray-700 shadow-xl px-8 py-4 w-[90%] mx-[6%] fixed bottom-0 bg-white">
       {
         <div className="flex">
          <button className="ml-auto" onClick={()=>{
            setShowContactInfo(false);
          }}>
        <CloseOutlined  />
          </button>
        </div>
        }
      
          <InContact internProfileFullDetails={internProfileFullDetails} /> 
      </div> : 
      
      <div className="mx-4 w-[90%] fixed bottom-0">
        <button 
       className={` mb-3 inline-block w-[100%] rounded px-6 pb-2 pt-2.5 font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
       data-te-ripple-init
       data-te-ripple-color="light"
       style={{
         background: "black",
        }}
        onClick={()=>{
          setShowContactInfo(true);
        }}
        >
        Show Contact Info
      </button>
                </div>

        }
        </div>
    </>
  );
};

export default StudentFullDetails;

import React, { useContext, useEffect, useRef, useState } from "react";
import LoadingPage from "../../../../../Component/LoadingPage/LodingPage";
import NoDataPage from "../../../../../Component/NoDataPage/NoDataPage";
import InternJobProfileModal from "./InJobProfModl/InJobProfModal";
import { DataContext } from "../../../../../context";
import InternProfileCard from "../../../../BothUserPages/InProfileCard/InProfileCard";

const InternJobProfileDisplay = (props) => {
  const { userDetails } = useContext(DataContext);

  return (
    <div className="col-span-1">
      {props?.internJobProfileObj.length == 0 ? (
        <div className="text-blue-500 p-8 rounded-xl shadow-md text-left border-2">
          <div className="mb-6  ">
            <InternJobProfileModal fromJobPage={false} />
          </div>
        </div>
      ) : (
        props?.internJobProfileObj?.map((element, index)=>{
            return <InternProfileCard profile={element} isCompany={false} key={index}/>
        })
        
      )}
    </div>
  );
};

export default InternJobProfileDisplay;

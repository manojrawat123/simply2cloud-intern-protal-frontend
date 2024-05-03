import React, { useContext, useEffect, useRef, useState } from "react";
import LoadingPage from "../../../../../Component/LoadingPage/LodingPage";
import NoDataPage from "../../../../../Component/NoDataPage/NoDataPage";
import InternJobProfileModal from "./InJobProfModl/InJobProfModal";
import { DataContext } from "../../../../../context";
import InternProfileCard from "../../../../BothUserPages/InProfileCard/InProfileCard";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const InternJobProfileDisplay = (props) => {
  const { userDetails, logoutFunc } = useContext(DataContext);

  return (
    <div className="col-span-1 mx-10">
      {props?.internJobProfileObj.length == 0 ? (
        <div className="text-blue-500 p-8 rounded-xl shadow-md text-left border-2">
          <div className="mb-6  ">
            <InternJobProfileModal fromJobPage={false} />
          </div>
        </div>
      ) : (
        <div>  {props?.internJobProfileObj?.map((element, index)=>{
            return <InternProfileCard profile={element} isCompany={false} key={index}/>
        }) }
            <div>
                        <button
                        onClick={()=>{
                          logoutFunc();
                        }}
                        className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                        type="button"
                        data-te-ripple-init
          data-te-ripple-color="light"
          style={{
            background: "#FF0000",
          }}> <PowerSettingsNewIcon /> Logout</button>
                    </div>
        </div>
      
        
      )}
    </div>
  );
};

export default InternJobProfileDisplay;

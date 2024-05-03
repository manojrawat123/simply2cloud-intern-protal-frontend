import React from 'react'
import AdLandingPage from './LandingPage/AdLandingPage';
import NmUnAuthJobsPage from './NmGetPaid/NmUserJobs/NmUserJobs';
import Cookies from "js-cookie";

const RenderAlgo = () => {
  return (
    Cookies.get("user_type") == "user" ?  <NmUnAuthJobsPage />: 
    <AdLandingPage />
    
  )
}

export default RenderAlgo

import Cookies from 'js-cookie'
import React from 'react'
import WelcomePage from './WelcomePage';
import CompanyWelcomPage from '../CompanyUserPages/CompanyHomePage/CompanyWelcomPage';
import { Navigate } from 'react-router-dom';

const RenderAlgo = () => {
    const user_type = Cookies.get("user_type");
    

    if(user_type == "company"){
        return <CompanyWelcomPage />
    }
    else if (user_type === "user"){
        return <WelcomePage />
    }

    else{
        <>Please Login First <Navigate to={"login"} className="underline text-blue-500">Login</Navigate></>
    }

  return (
    <>
        
    </>
  )
}

export default RenderAlgo

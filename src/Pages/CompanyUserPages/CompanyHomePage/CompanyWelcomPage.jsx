import React, { useContext, useEffect } from 'react'
import StudentProfile from '../../welcome_page/StudentDetails/StudentProfile'
import Cookies from 'js-cookie'
import { DataContext } from '../../../context';

const CompanyWelcomPage = () => {

  const {companyProfileFunc} = useContext(DataContext);

  useEffect(()=>{
    if(!Cookies.get("company")){
      companyProfileFunc();
    }
  },[])
  return (
    <div>
       <StudentProfile />
    </div>
  )
}

export default CompanyWelcomPage

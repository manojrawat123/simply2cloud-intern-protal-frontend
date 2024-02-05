import axios from "axios";
import { createContext, useState } from "react";
import API_BASE_URL from "./config";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

const DataProviderFuncComp = ({ children })=>{

    const [userDetails, setUserDetails] = useState();
    const [avaibleSkills, setAvaibleSkills] = useState();
    const [companyUserDetail, setCompanyUserDetail] = useState();
    const [jobPostedByCompany, setJobPostedByCompany]= useState();

    const token = Cookies.get('token');
    const navigate = useNavigate();

  const profileFunc = ()=>{
    axios.get(`${API_BASE_URL}/profile`, {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    }).then((value)=>{
        console.log(value.data);
        setUserDetails(value.data);
    }).catch((err)=>{
        Cookies.remove("token");
        navigate('/login');
    })
  }


  const avaibleSkillsFunc = ()=>{
    axios.get(`${API_BASE_URL}/available-skills/`, {headers : {
        Authorization : `Bearer ${token}`
    }}).then((values)=>{
        setAvaibleSkills(values.data);        
    }).catch((err)=>{
        console.log(err);
    })
  }


  const companyProfileFunc = ()=>{
    axios.get(`${API_BASE_URL}/profile`, {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    }).then((value)=>{
        console.log(value.data);
        setAvaibleSkills(value.data.aviable_skills);
        setCompanyUserDetail(value.data);
        Cookies.set("company",value.data.company_details.id)
    }).catch((err)=>{
        Cookies.remove("token");
        Cookies.remove("user_type")
        navigate('/login');
    });
  }


  const getJobsPostedByCompanyFunc = ()=>{
    if(!Cookies.get('company')){
        companyProfileFunc();
    }
    else{

        const company_id = Cookies.get("company");
    axios.get(`${API_BASE_URL}/job-post/${company_id}/`, {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    }).then((value)=>{
        setJobPostedByCompany(value.data);
        console.log(value.data);
    }).catch((err)=>{
        console.log(err);
    });
}
  }

    

    return (
        <DataContext.Provider value={{
            profileFunc,
            userDetails,
            avaibleSkillsFunc,
            avaibleSkills,
            companyProfileFunc,
            companyUserDetail,
            getJobsPostedByCompanyFunc,
            jobPostedByCompany
        }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProviderFuncComp, DataContext }
import axios from "axios";
import { createContext, useState } from "react";
import API_BASE_URL from "./config";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

const DataProviderFuncComp = ({ children }) => {

    const [userDetails, setUserDetails] = useState();
    const [avaibleSkills, setAvaibleSkills] = useState();
    const [companyUserDetail, setCompanyUserDetail] = useState();
    const [jobPostedByCompany, setJobPostedByCompany] = useState();
    const [studentJobsObj, setStudentJobObj] = useState();
    const [searchTitleSlugsObj, setSearchSlug] = useState([]);
    const [searchLocationSlugObj, setSearchLocationSlug] = useState([]);

    const token = Cookies.get('token');
    const navigate = useNavigate();

    const profileFunc = () => {
        axios.get(`${API_BASE_URL}/profile/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((value) => {
            console.log(value.data);
            setUserDetails(value.data);
            Cookies.set("user_type", value.data.user_details.user_type)
            Cookies.set("user", value.data.user_details.id)
        }).catch((err) => {
            logoutFunc()
        })
    }

    const avaibleSkillsFunc = () => {
        axios.get(`${API_BASE_URL}/available-skills/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((values) => {
            setAvaibleSkills(values.data);
        }).catch((err) => {
            console.log(err);
        })
    }


    const companyProfileFunc = () => {
        axios.get(`${API_BASE_URL}/profile/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((value) => {
            console.log(value.data);
            setAvaibleSkills(value.data.aviable_skills);
            setCompanyUserDetail(value.data);
            Cookies.set("company", value.data.company_details.id)
            Cookies.set("user", value.data.user_details.id);
        }).catch((err) => {
            logoutFunc()
        });
    }

    const getJobsPostedByCompanyFunc = () => {
        if (!Cookies.get('company')) {
            companyProfileFunc();
        }
        else {

            const company_id = Cookies.get("company");
            axios.get(`${API_BASE_URL}/job-post/${company_id}/`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then((value) => {
                setJobPostedByCompany(value.data);
                console.log(value.data);
            }).catch((err) => {
                console.log(err);
            });
        }
    }


    const logoutFunc = () => {
        Cookies.remove("token");
        Cookies.remove("user_type");
        Cookies.remove("user");
        Cookies.remove("company");
        navigate('/login');
    }


    const getJobsForStudentFunc = () => {
        axios.get(`${API_BASE_URL}/job-post/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((value) => {
            setStudentJobObj(value.data.all_jobs);
            setSearchSlug(value.data.search_title_keywords);
            setSearchLocationSlug(value.data.search_location_slug);
            console.log(value.data);
        }).catch((err) => {
            console.log(err);
        });
    }


    const jobSearchFilterFunc = (job_title = null, location=null, setFilteredJobs)=>{
        axios.get(`${API_BASE_URL}/job-search/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            params:{
                job_title : job_title,
                location : location
            }
        }).then((value) => {
            console.log(value.data);
            setFilteredJobs(value.data);
        }).catch((err) => {
            console.log(err);
        });
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
            jobPostedByCompany,
            logoutFunc,
            getJobsForStudentFunc,
            studentJobsObj,
            searchTitleSlugsObj,
            setStudentJobObj,
            searchLocationSlugObj,
            jobSearchFilterFunc
        }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProviderFuncComp, DataContext }
import axios from "axios";
import { createContext, useState } from "react";
import API_BASE_URL from "./config";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

const DataProviderFuncComp = ({ children }) => {
  const [userDetails, setUserDetails] = useState();
  const [unAuthUserDetail, setUnAuthUserDetail] = useState();
  const [unAuthJobs, setUnAuthJobs] = useState();
  const [avaibleSkills, setAvaibleSkills] = useState([]);
  const [companyUserDetail, setCompanyUserDetail] = useState();
  const [jobPostedByCompany, setJobPostedByCompany] = useState();
  const [studentJobsObj, setStudentJobObj] = useState();
  const [jobCategoeryOpt, setJobCategoeryOpt] = useState([]);
  const [searchTitleSlugsObj, setSearchSlug] = useState([]);
  const [searchLocationSlugObj, setSearchLocationSlug] = useState([]);
  const [jobSubCategoeryOpt, setJobSubCategoeryOpt] = useState([]);
  const [jobApplication, setJobApplication] = useState();
  const [approvedApplication, setApprovedApplication] = useState(); 
  const [rejectedApplication, setRejectedApplication] = useState();

  const token = Cookies.get("token");
  const navigate = useNavigate();

  const profileFunc = () => {
    axios
      .get(`${API_BASE_URL}/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        console.log(value.data);
        setUserDetails(value.data);
        Cookies.set("user_type", value.data.user_details.user_type);
        Cookies.set("user", value.data.user_details.id);
        let skills_id = [];
        let user_avaliable_skills_id = [];
        if (value.data && value.data.skills_detail) {
          skills_id = value.data.skills_detail.map((element) => element.id);
          Cookies.set("skills_ids", skills_id)
        }
        if (value.data && value.data.skills_detail){
            user_avaliable_skills_id = value.data.skills_detail.map((element) => element.skill_id);
            Cookies.set("user_avaliable_skills_id", user_avaliable_skills_id); 
        }
        console.log(Cookies.get("skills_ids") == "");
        try {
          Cookies.set("profile_id", value.data?.intern_job_profile[0]?.id);
        } catch (err) {

        }
      })
      .catch((err) => {
        console.log(err)
        logoutFunc();
      });
  };

  const avaibleSkillsFunc = () => {
    axios
      .get(`${API_BASE_URL}/available-skills/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((values) => {
        setAvaibleSkills(values.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const companyProfileFunc = () => {
    axios
      .get(`${API_BASE_URL}/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        console.log(value.data);
        setAvaibleSkills(value.data.aviable_skills);
        setJobCategoeryOpt(value.data.categoery_option);
        setCompanyUserDetail(value.data);
        Cookies.set("company", value.data.company_details.id);
        Cookies.set("user", value.data.user_details.id);
      })
      .catch((err) => {
        logoutFunc();
      });
  };



  const companyJobPageFunc = () => {
    axios
      .get(`${API_BASE_URL}/job-post/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        console.log(value.data);
        setAvaibleSkills(value.data.aviable_skills);
        setJobCategoeryOpt(value.data.categoery_option);
        setJobSubCategoeryOpt(value.data.sub_categoery);
      })
      .catch((err) => {
        logoutFunc();
      });
  };

  const getJobsPostedByCompanyFunc = () => {
    if (!Cookies.get("company")) {
      companyProfileFunc();
    } else {
      const company_id = Cookies.get("company");
      axios
        .get(`${API_BASE_URL}/job-post/${company_id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((value) => {
          setJobPostedByCompany(value.data);
          console.log(value.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const logoutFunc = () => {
    Cookies.remove("token");
    Cookies.remove("user_type");
    Cookies.remove("user");
    Cookies.remove("company");
    Cookies.remove("profile_id");
    Cookies.remove("skills_ids");
    Cookies.remove("user_avaliable_skills_id");

    navigate("/login");
  };

  const getJobsForStudentFunc = () => {
    axios
      .get(`${API_BASE_URL}/job-post/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        setStudentJobObj(value.data.all_jobs);
        setSearchSlug(value.data.search_title_keywords);
        setSearchLocationSlug(value.data.search_location_slug);
        setJobSubCategoeryOpt(value.data.sub_categoery);
        setJobCategoeryOpt(value.data.search_categoery);
        console.log(value.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const jobSearchFilterFunc = (
    categoery = null,
    job_title = null,
    location = null,
    sub_categoery = null,
    setFilteredJobs
  ) => {
    axios
      .get(`${API_BASE_URL}/job-search/`, {
        params: {
          job_categoery : categoery,
          job_title: job_title,
          location: location,
          sub_categoery: sub_categoery
        },
      })
      .then((value) => {
        console.log(value.data);
        setFilteredJobs(value.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getJobApplicationFunc = (status=null) => {

    axios
      .get(`${API_BASE_URL}/intern-job-apply/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params : {
            status : status
        }
      })
      .then((value) => {
        setJobApplication(value.data);
        console.log(status)
        if (status == "Accepted"){
            setApprovedApplication(value.data);
        }
        else if(status == "Rejected"){
            setRejectedApplication(value.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unAuthHomePageFunc = () => {
    axios
      .get(`${API_BASE_URL}/home-unauth/`)
      .then((value) => {
        setJobCategoeryOpt(value.data.avaliable_categoery);
        setAvaibleSkills(value.data.available_skill);
        setJobSubCategoeryOpt(value.data.avaliable_subcategoery);
      })
      .catch((err) => {
      });
  };


  const unAuthInternSerchFunc = (ct_id, search)=>{
    const queryParams = {params:{
      [search] : ct_id
    }}
    console.log(queryParams)
    axios.get(`${API_BASE_URL}/intern-unauth-search/`, queryParams).then((value) => {
        setUnAuthUserDetail(value.data.intern_job_profile);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const getUnAuthJobsFunc = ()=>{
    axios
      .get(`${API_BASE_URL}/job-unauth-search/`)
      .then((value) => {
        console.log(value.data);
        setUnAuthJobs(value.data.all_jobs);
        setSearchSlug(value.data.search_title_keywords);
        setSearchLocationSlug(value.data.search_location_slug);
        setJobSubCategoeryOpt(value.data.sub_categoery);
        setJobCategoeryOpt(value.data.search_categoery);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <DataContext.Provider
      value={{
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
        jobSearchFilterFunc,
        jobCategoeryOpt,
        getJobApplicationFunc,
        jobApplication,
        jobSubCategoeryOpt,
        companyJobPageFunc,
        unAuthHomePageFunc,
        unAuthUserDetail,
        unAuthInternSerchFunc,
        setUnAuthUserDetail,
        getUnAuthJobsFunc,
        unAuthJobs,
        approvedApplication,
        rejectedApplication
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProviderFuncComp, DataContext };

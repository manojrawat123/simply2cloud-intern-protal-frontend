import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./Pages/welcome_page/WelcomePage";
import LoginPage from "./Component/LoginComponent/Login/LoginPage";
import NavMenu from "./Component/Navbar/NavMenu";
import Register from "./Component/LoginComponent/Register/Register";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import Footer from "./Component/Footer/Footer";
import StudentFullDetails from "./Pages/welcome_page/StudentDetails/StudentFullDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompanyRegister from "./Component/LoginComponent/CompanyRegister/CompanyRegisterInpArr";
import Cookies from "js-cookie";
import RenderAlgo from "./Pages/welcome_page/RenderAlgo";
import CompanyProtectedRoutes from "./Component/ProtectedRoutes/CompanyProtectedRoutes";
import CompanyJobs from "./Pages/CompanyUserPages/Jobs/CompanyJobs";
import JobPostForm from "./Pages/CompanyUserPages/Jobs/JobsPost/JobsPostForm/JobPostForm";
import InternAddSkillsForm from "./Pages/InternUserPages/InPrfPage/InSkills/InSkillAddModel/AddSkillForm/InAddSkillForm";
import InternProfilePage from "./Pages/InternUserPages/InPrfPage/InProfilePage";
import UserJobs from "./Pages/InternUserPages/InUserJobs/UserJobs";
import JobApplications from "./Pages/CompanyUserPages/JobApplication/JobApplications";
import NmInSearchPg from "./Pages/welcome_page/NmInSearchPg/NmInSearchPg";
import NmUnAuthJobsPage from "./Pages/welcome_page/NmGetPaid/NmUserJobs/NmUserJobs";
import RejectedApplication from "./Pages/CompanyUserPages/JobApplication/RejectedApplication/RejectedApplication";
import ApprovedApplication from "./Pages/CompanyUserPages/JobApplication/ApprovedApplication/ApprovedApplication";
import InternJobProfileUpdate from "./Pages/InternUserPages/InPrfPage/InJobProfile/InJobProfForm/InJobProfUpForm";


function App() {
  return (
    <>
      <ToastContainer />
      <NavMenu />
      <Routes>
        {/* UnProtected Routes */}
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={Register} />
        <Route path="/company-register" Component={CompanyRegister} />
        <Route path="/intern-details/:id" Component={StudentFullDetails} />
        

        {/* Intern Routes */}
        {/* <Route path="" Component={ProtectedRoutes}> */}
          <Route path="" Component={RenderAlgo} />
          <Route path="/search" Component={NmInSearchPg} />
          <Route path="/nm-jobs" Component={NmUnAuthJobsPage} />

        {/* </Route> */} 

        {/* <Route path="" Component={ProtectedRoutes}> */}
        {/* </Route> */}
        <Route path="" Component={ProtectedRoutes}>
          <Route path="/profile" Component={InternProfilePage} />
        </Route>
        <Route path="" Component={ProtectedRoutes}>
          <Route path="/update-profile/:id" Component={InternJobProfileUpdate} />
        </Route>
        <Route path="" Component={ProtectedRoutes}>
          <Route path="/jobs" Component={UserJobs} />
        </Route>
        <Route path="" Component={ProtectedRoutes}>
          <Route path="/addskill" Component={InternAddSkillsForm} />
        </Route>

       
        {/* Company Routes */}
        <Route path="" Component={CompanyProtectedRoutes}>
          <Route path="/post-jobs" Component={CompanyJobs} />
        </Route>
        <Route path="" Component={CompanyProtectedRoutes}>
          <Route path="/post-new-jobs" Component={JobPostForm} />
        </Route>
        <Route path="" Component={CompanyProtectedRoutes}>
          <Route path="/job-application" Component={JobApplications} />
        </Route>
        <Route path="" Component={CompanyProtectedRoutes}>
          <Route path="/job-application-rejected" Component={RejectedApplication} />
        </Route>
        <Route path="" Component={CompanyProtectedRoutes}>
          <Route path="/job-application-approved" Component={ApprovedApplication} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;

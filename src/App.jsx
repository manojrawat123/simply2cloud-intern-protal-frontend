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
import ProfilePage from "./Pages/profilePage/ProfilePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompanyLoginPage from "./Component/LoginComponent/CompanyLogin/CompanyLogin";
import CompanyRegister from "./Component/LoginComponent/CompanyRegister/CompanyRegisterInpArr";
import Cookies from "js-cookie";
import RenderAlgo from "./Pages/welcome_page/RenderAlgo";
import CompanyProtectedRoutes from "./Component/ProtectedRoutes/CompanyProtectedRoutes";
import CompanyJobs from "./Pages/CompanyUserPages/Jobs/CompanyJobs";

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
        

        {/* Intern Routes */}
        <Route path="" Component={ProtectedRoutes}>
          <Route path="" Component={RenderAlgo} />
        </Route>

        <Route path="" Component={ProtectedRoutes}>
          <Route path="/studentdetails" Component={StudentFullDetails} />
        </Route>
        <Route path="" Component={ProtectedRoutes}>
          <Route path="/profile" Component={ProfilePage} />
        </Route>

       
        {/* Company Routes */}

        <Route path="" Component={CompanyProtectedRoutes}>
          <Route path="/post-jobs" Component={CompanyJobs} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;

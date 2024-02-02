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
import 'react-toastify/dist/ReactToastify.css';
import CompanyLoginPage from "./Component/LoginComponent/CompanyLogin/CompanyLogin";
import CompanyRegister from "./Component/LoginComponent/CompanyRegister/CompanyRegisterInpArr";
import Cookies from "js-cookie";
import RenderAlgo from "./Pages/welcome_page/RenderAlgo";


function App() {
  
  return (
    <>
    
    
    <ToastContainer />
    <NavMenu />
      <Routes>
        {/* UnProtected Routes */}

          <Route path="" Component={ProtectedRoutes}>
          <Route path="" Component={RenderAlgo} />
        </Route> 
  
        <Route path="" Component={ProtectedRoutes}>
          <Route path="/studentdetails" Component={StudentFullDetails} />
        </Route>
        <Route path="" Component={ProtectedRoutes}>
          <Route path="/profile" Component={ProfilePage} />
        </Route>
        
        <Route path="/login" Component={LoginPage} /> 
        <Route path="/signup" Component={Register} /> 
        <Route path="/company-register" Component={CompanyRegister} /> 
        
      </Routes>

      <Footer />
    </>
  )
}

export default App

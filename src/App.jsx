import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./Pages/welcome_page/WelcomePage";
import LoginPage from "./Component/LoginComponent/Login/LoginPage";
import NavMenu from "./Component/Navbar/NavMenu";
import Register from "./Component/LoginComponent/Register/Register";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import Footer from "./Component/Footer/Footer";

function App() {

  return (
    <>
    <NavMenu />
      <Routes>
        {/* UnProtected Routes */}
        <Route path="" Component={ProtectedRoutes}>
          <Route path="" Component={WelcomePage} />
        </Route>
        <Route path="/login" Component={LoginPage} /> 
        <Route path="/signup" Component={Register} /> 
        {/* <Route path="*" Component={} />  */}
        
      </Routes>

      <Footer />
    </>
  )
}

export default App

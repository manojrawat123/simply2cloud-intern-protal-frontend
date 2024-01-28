import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {

  const navigate = useNavigate();

    useEffect(()=>{
        if (!Cookies.get('token')){
            return navigate("/login");
        }
    },[])


  return (
    <Outlet />
  )
}

export default ProtectedRoutes

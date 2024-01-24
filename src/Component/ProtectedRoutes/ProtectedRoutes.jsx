import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

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

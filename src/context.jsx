

import axios from "axios";
import { createContext, useState } from "react";
import API_BASE_URL from "./config";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

const DataProviderFuncComp = ({ children })=>{

    const [userDetails, setUserDetails] = useState();
    const token = Cookies.get('token');
    const navigate = useNavigate();

  const profileFunc = ()=>{
    axios.get(`${API_BASE_URL}/profile`, {
        headers : {
            "Authorization" :  `Bearer ${token}`
        }
    }).then((value)=>{
        console.log(value.data);
        setUserDetails(value.data);
    }).catch((err)=>{
        Cookies.remove("token");
        navigate('/login');
    })
  }

    

    return (
        <DataContext.Provider value={{
            profileFunc,
            userDetails
        }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProviderFuncComp, DataContext }
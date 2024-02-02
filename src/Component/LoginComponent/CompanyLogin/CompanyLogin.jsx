import React, { useContext, useState } from 'react';
import logo from "../../../image/simply2cloud.jpg";
import { DataContext } from '../../../context';
import { CircularProgress } from '@mui/material';
import axios from "axios";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import API_BASE_URL from '../../../config';
import { ToastContainer } from 'react-toastify';
import compnayInpArr from './CompanyLoginInpArr';


const CompanyLoginPage = () => {

    const [loginButton, setLoginButton] = useState(false);
    const navigate = useNavigate();

    const loginFunc = (e) => {
        e.preventDefault();
        setLoginButton(true);
        axios.post(`${API_BASE_URL}/compnaylogin/`, {
            email: e.target.username.value,
            password: e.target.password.value,
        }).then((value) => {
            Cookies.set('token', value.data.token.access, { secure: true });
            navigate("/");
        }).catch((err) => {
            console.log({
                email: e.target.username.value,
                password: e.target.password.value,
            })
            console.log(err);
        }).finally(() => {
            setLoginButton(false);
        })
    }


    return (
        <>
            <ToastContainer />
            <section className="gradient-form h-[100vh] bg-neutral-200  dark:bg-neutral-700">
                <div className=" h-full p-10">
                    <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[55%] mx-auto">
                        <div className="w-full">
                            <div className="block rounded-lg bg-white shadow-xl dark:bg-neutral-800 py-20 md:py-0">
                                <div className="px-4 md:px-0">
                                    <div className="md:mx-6 md:p-12">

                                        <div className="text-center mt-4">
                                            <img
                                                className="mx-auto w-48"
                                                src={logo}
                                                alt="logo"
                                            />
                                        </div>
                                        <h2 className="bg-gray-100 text-blue-600 text-3xl py-4 px-6  font-semibold text-center">Company Login</h2>

                                        <form onSubmit={loginFunc}>
                                            {/* Username input */}
                                            {compnayInpArr.map((element, index) => {
                                                return (
                                                    <div className="relative my-4" data-te-input-wrapper-init key={index}>
                                                        <input
                                                            type={element.type}
                                                            id={element.id}
                                                            name={element.name}
                                                            required
                                                            className=" border border-gray-300 outline-none peer  block min-h-[auto] w-full pl-8 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600  focus:border rounded"
                                                            placeholder={element.placeholder}
                                                        />
                                                        {element.icon}
                                                    </div>
                                                )
                                            })}
                                            <div className="pb-1 pt-1 text-center">
                                                <button
                                                    className={` inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                                                    type="submit"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                    style={{
                                                        background: "green",
                                                    }}
                                                >
                                                    {loginButton ? <CircularProgress size={19} color='inherit' /> : "Login"}
                                                </button>
                                            </div>
                                            <div className=" pb-1 pt-1 text-center">
                                                <NavLink to={"/login"}>

                                                    <button
                                                        className={`underline inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                                                    >
                                                        Find Jobs
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyLoginPage
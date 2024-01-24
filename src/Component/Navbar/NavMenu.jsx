import React, { useState } from 'react'
import navItem from "../Navbar/navdata.json"
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    const login = true;
    const [mobMenuVis, setMobileVis] = useState(false);
    return (
        <nav
            className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <span className="font-semibold text-xl tracking-tight">Simply 2 Cloud</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        id="nav"
                        className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                        {mobMenuVis ?
                            <svg
                                onClick={() => {
                                    setMobileVis(false)
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="fill-current h-3 w-3"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            : <svg
                            
                            onClick={() => {
                                setMobileVis(true)
                            }}
                            className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>}
                    </button>
                </div>
            </div> 
            <div className={`menu w-full lg:block  lg:items-center lg:w-auto lg:px-3 px-8  ${mobMenuVis ?  "flex-grow" : " hidden"}` }>
                <div className="text-md font-bold text-blue-700 lg:flex text-center">
                    {login ? navItem.map((element, index) => {
                        return (
                            <NavLink to={element.link}
                                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 ${element.link == "signup" ? 'lg:ml-auto' : "lg:ml-8"}`}>
                                {element.label}
                            </NavLink>
                        )
                    }) : null}
                </div>
            </div>
        </nav>
    )
}

export default NavMenu

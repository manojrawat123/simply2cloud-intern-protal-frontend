import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CloseOutlined } from '@mui/icons-material';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Cookies from 'js-cookie';
import navItem from './navdata';
import { DataContext } from '../../context';


const NavMenu = () => {
    const [mobMenuVis, setMobileVis] = useState(false);
    const { logoutFunc } = useContext(DataContext);
    const location = useLocation();

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
                            <CloseOutlined onClick={() => {
                                setMobileVis(false);
                            }} />
                            :
                            <TableRowsIcon onClick={() => {
                                setMobileVis(true);
                            }} />
                        }
                    </button>
                </div>
            </div>
            <div className={`menu w-full lg:block  lg:items-center lg:w-auto lg:px-3 px-8  ${mobMenuVis ? "flex-grow" : " hidden"}`}>
                <div className="text-md font-bold text-blue-700 lg:flex text-center">
                    {navItem?.map((element, index) => {


                        if (!Cookies.get('token') && element.visibility == "logout") {
                            return (
                                <NavLink to={element.link} key={index}
                                    className={`block mt-4 lg:inline-block lg:mt-0  px-4 py-2 rounded hover:bg-blue-700 hover:text-white mr-2 ${element.link == "signup" ? 'lg:ml-auto' : "lg:ml-8"} ${element.link == location.pathname || location.pathname == "company-register" ? ' bg-blue-700 text-white' : ' '}`}>
                                    {element.label}
                                </NavLink>
                            )
                        }
                        // Nav Logic for Company User
                        else if (Cookies.get('token') && element.visibility == "login" && (element.user == Cookies.get("user_type") || element.user == "both")) {
                            return (
                                <NavLink to={element.link} key={index}
                                    className={`block mt-4 lg:inline-block lg:mt-0  px-4 py-2 rounded hover:bg-blue-700 hover:text-white mr-2 ${element.link == "signup" ? 'lg:ml-auto' : "lg:ml-8"} ${element.link == location.pathname ? ' bg-blue-700 text-white' : ' '}`}>
                                    {element.label}
                                </NavLink>
                            )
                        }
                        else if (Cookies.get('token') && element.user == "button") {
                            return (
                                <div
                                    onClick={() => {
                                       logoutFunc()
                                    }}
                                    className={`block mt-4 lg:inline-block lg:mt-0  px-4 py-2 rounded hover:bg-blue-700 hover:text-white mr-2 ${element.link == "signup" ? 'lg:ml-auto' : "lg:ml-8"} ${element.link == location.pathname ? ' bg-blue-700 text-white' : ' '}`}>

                                    {element.label}
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </nav>
    )
}

export default NavMenu

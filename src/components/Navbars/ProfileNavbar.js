/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
import ProfileDropdown from "../Dropdowns/ProfileDropdown";

export default function Navbar(props) {
    return (
        <>
            <nav
                className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 flex mx-auto flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            to="/home"
                            className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                        >
                            <i className="fas fa-lg fa-home"></i> HRMS
                        </Link>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none block"
                        }
                    >
                        <ul className="flex flex-col lg:flex-row hidden md:block list-none lg:ml-auto">
                            <li className="flex items-center">
                                <ProfileDropdown/>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

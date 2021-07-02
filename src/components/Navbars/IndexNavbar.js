/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
// components
export default function Navbar() {
    return (
        <>
            <nav
                className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            to="/"
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
                                <Link
                                    to="/auth/login"
                                    className="text-white font-bold px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-600 active:bg-lightBlue-600 uppercase text-sm shadow ease-linear transition-all duration-150"

                                >

                                    Giriş Yap

                                </Link>
                                <Link
                                    to="/auth/register"
                                    className="ml-1 text-white font-bold px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"

                                >

                                    Kayıt Ol

                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

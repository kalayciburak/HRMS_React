/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
        <>
            <nav
                className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-blueGray-100 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
                style={{background: "linear-gradient(#fff, #8BA5BEFF)"}}>
                <div
                    className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Brand */}
                    <span
                        className="md:block text-center md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
              Admin Paneli
          </span>

                    {/* User */}
                    {/*<ul className="items-center flex flex-wrap list-none">*/}
                    {/*    <li className="inline-block relative">*/}
                    {/*        <NotificationDropdown/>*/}
                    {/*    </li>*/}
                    {/*    <li className="inline-block relative">*/}
                    {/*        <UserDropdown/>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Divider */}
                        <hr className="my-4 md:min-w-full border-blueGray-600"/>
                        {/* Heading */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/systemPersonelList") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-800 hover:text-blueGray-500")
                                    }
                                    to="/admin/systemPersonelList"
                                >
                                    <i
                                        className={
                                            "fas fa-user-cog mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/systemPersonelList") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-800")
                                        }
                                    ></i>{" "}
                                    Sistem Personelleri
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/jobseekerList") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-800 hover:text-blueGray-500")
                                    }
                                    to="/admin/jobseekerList"
                                >
                                    <i
                                        className={
                                            "fas fa-user mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/jobseekerList") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-800")
                                        }
                                    ></i>{" "}
                                    İş Arayanlar
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/employerList") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-800 hover:text-blueGray-500")
                                    }
                                    to="/admin/employerList"
                                >
                                    <i
                                        className={
                                            "fas fa-building mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/employerList") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-800")
                                        }
                                    ></i>{" "}
                                    İş Verenler
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/jobAdvertList") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-800 hover:text-blueGray-500")
                                    }
                                    to="/admin/jobAdvertList"
                                >
                                    <i
                                        className={
                                            "fas fa-briefcase mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/jobAdvertList") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-800")
                                        }
                                    ></i>{" "}
                                    İş İlanları
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/settings") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-800 hover:text-blueGray-500")
                                    }
                                    to="/admin/settings"
                                >
                                    <i
                                        className={
                                            "fas fa-tools mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/settings") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-800")
                                        }
                                    ></i>{" "}
                                    Ayarlar
                                </Link>
                            </li>
                            <hr className="my-4 md:min-w-full border-blueGray-600"/>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/home") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-black hover:text-blueGray-500")
                                    }
                                    to="/home"
                                >
                                    <i
                                        className={
                                            "fas fa-home mr-2 text-sm " +
                                            (window.location.href.indexOf("/home") !== -1
                                                ? "opacity-100"
                                                : "text-black")
                                        }
                                    ></i>{" "}
                                    Ana Sayfaya
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

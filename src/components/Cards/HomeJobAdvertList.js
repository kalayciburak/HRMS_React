import React, {Fragment, useEffect, useState} from 'react';
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/solid";
import JobAdvertService from "../../services/JobAdvertService";
import BackToTop from "../Utility/BackToTop";
import Swal from "sweetalert2";
import BackToBottom from "../Utility/BackToBottom";

function HomeJobAdvertList() {

    const jobAdvertService = new JobAdvertService();

    const [jobAdverts, setJobAdverts] = useState([])

    const [jobAdvertLength, setJobAdvertLength] = useState([]);

    const [searchTerm, setSearchTerm] = useState('')

    const [sort, setSort] = useState(true)

    const [pageSize, setPageSize] = useState(5);

    const [pageNo, setPageNo] = useState(1);

    const [paginationSize, setPaginationSize] = useState(4);

    const [windowY, setWindowY] = useState(0);

    let jobSeekerId = 1 //burası login yapmış olan kullanıcıdan alınacak

    useEffect(() => {
        let isMounted = true;
        if (sort) {
            jobAdvertService.getJobAdvertByIsActiveTrueAndIsConfirmedTrue().then((res) => {
                if (isMounted) {
                    setJobAdvertLength(res.data.data)
                }
            })
            jobAdvertService.getJobAdvertByIsActiveTrueAndIsConfirmedTrueByPageDesc(pageNo, pageSize)
                .then((result) => {
                    if (isMounted) {
                        setJobAdverts(result.data.data)
                    }
                })

        } else {
            jobAdvertService.getJobAdvertByIsActiveTrueAndIsConfirmedTrueByPageAsc(pageNo, pageSize)
                .then((result) => {
                    if (isMounted) {
                        setJobAdverts(result.data.data)
                    }
                })
        }


        return () => {
            isMounted = false; //cleaunp
        }

    }, [sort, paginationSize, pageNo])

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    let airdate;

    let website;

    const check = <i className="font-bold fas fa-check"></i>

    return (
        <div onMouseMove={() => setWindowY(window.pageYOffset)}>
            <BackToTop/>
            <BackToBottom/>

            <h3 className="text-4xl mt-20 font-semibold leading-normal text-blueGray-800 text-center"><i
                className="fas fa-briefcase"></i> İş İlanları</h3>
            <div className="relative mt-3 lg:w-3/12 ml-auto mr-auto rounded">
                <Menu as="div" className="absolute inline-block text-center" style={{marginLeft: "-38%"}}>
                    {({open}) => (
                        <>
                            <div>
                                <Menu.Button
                                    className="flex justify-center font-semibold shadow-sm mt-1 md:px-10 py-2 rounded bg-blueGray-800 text-sm text-blueGray-300 shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    İlan Sayısı
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                                </Menu.Button>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className=" absolute w-full bg-white text-blueGray-800"
                                >
                                    <div className="cursor-pointer">
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    style={{borderBottom: "2px solid #1E293B"}}
                                                    className={classNames(
                                                        pageSize == 5 ? 'bg-indigo-500 text-white font-semibold' : 'bg-blueGray-600 text-blueGray-300 hover:bg-purple-400 font-semibold',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => {
                                                        setPageSize(5)
                                                        setPaginationSize(Math.round(jobAdvertLength.length / 5) < 1 ? 1 : Math.ceil(
                                                            jobAdvertLength.length / 5))
                                                        setPageNo(1)
                                                        if (pageSize != 5) {
                                                            Swal.fire({
                                                                          timerProgressBar: true,
                                                                          showConfirmButton: false,
                                                                          timer: 500,
                                                                      })
                                                            Swal.showLoading()
                                                        }

                                                    }}
                                                >
                                                    5 Adet İlan {pageSize == 5 ? check : ""}
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    style={{borderBottom: "2px solid #1E293B"}}
                                                    className={classNames(
                                                        pageSize == 10 ? 'bg-indigo-500 text-white font-semibold' : 'bg-blueGray-600 text-blueGray-300 hover:bg-purple-400 font-semibold',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => {
                                                        setPageSize(10)
                                                        setPaginationSize(Math.round(jobAdvertLength.length / 10) < 1 ? 1 : Math.ceil(
                                                            jobAdvertLength.length / 10))
                                                        setPageNo(1)
                                                        if (pageSize != 10) {
                                                            Swal.fire({
                                                                          timerProgressBar: true,
                                                                          showConfirmButton: false,
                                                                          timer: 500,
                                                                      })
                                                            Swal.showLoading()
                                                        }

                                                    }}
                                                >
                                                    10 Adet İlan {pageSize == 10 ? check : ""}
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    style={{borderBottom: "2px solid #1E293B"}}
                                                    className={classNames(
                                                        pageSize != 20 ? 'bg-blueGray-600 text-blueGray-300 hover:bg-purple-400 font-semibold' : 'bg-indigo-500 text-white font-semibold',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => {
                                                        setPageSize(20)
                                                        setPaginationSize(Math.round(jobAdvertLength.length / 20) < 1 ? 1 : Math.ceil(
                                                            jobAdvertLength.length / 20))
                                                        setPageNo(1)
                                                        if (pageSize != 20) {
                                                            Swal.fire({
                                                                          timerProgressBar: true,
                                                                          showConfirmButton: false,
                                                                          timer: 500,
                                                                      })
                                                            Swal.showLoading()
                                                        }

                                                    }}
                                                >
                                                    20 Adet İlan {pageSize != 20 ? "" : check}
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    style={{borderBottom: "2px solid #1E293B"}}
                                                    className={classNames(
                                                        pageSize == 50 ? 'bg-indigo-500 text-white font-semibold' : 'bg-blueGray-600 text-blueGray-300 hover:bg-purple-400 font-semibold',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => {
                                                        setPageSize(50)
                                                        setPaginationSize(Math.round(jobAdvertLength.length / 50) < 1 ? 1 : Math.ceil(
                                                            jobAdvertLength.length / 50))
                                                        setPageNo(1)
                                                        if (pageSize != 50) {
                                                            Swal.fire({
                                                                          timerProgressBar: true,
                                                                          showConfirmButton: false,
                                                                          timer: 500,
                                                                      })
                                                            Swal.showLoading()
                                                        }

                                                    }}
                                                >
                                                    50 Adet İlan {pageSize == 50 ? check : ""}
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    style={{borderBottom: "2px solid #1E293B"}}
                                                    className={classNames(
                                                        pageSize == 100 ? 'bg-indigo-500 text-white font-semibold' : 'bg-blueGray-600 text-blueGray-300 hover:bg-purple-400 font-semibold',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => {
                                                        setPageSize(100)
                                                        setPaginationSize(Math.round(jobAdvertLength.length / 100) < 1 ? 1 : Math.ceil(
                                                            jobAdvertLength.length / 100))
                                                        setPageNo(1)
                                                        if (pageSize != 100) {
                                                            Swal.fire({
                                                                          timerProgressBar: true,
                                                                          showConfirmButton: false,
                                                                          timer: 500,
                                                                      })
                                                            Swal.showLoading()
                                                        }

                                                    }}
                                                >
                                                    100 Adet İlan {pageSize == 100 ? check : ""}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
                <span
                    className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
                <input
                    type="text"
                    placeholder="Örn: Full-stack developer..."
                    className="border-0 px-3 py-3 placeholder-blueGray-300 font-semibold text-blueGray-300 relative bg-blueGray-800 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                        setPageSize(100)
                    }}

                />
                <Menu as="div" className="absolute inline-block text-left ml-2">
                    {({open}) => (
                        <>
                            <div>
                                <Menu.Button
                                    className="flex justify-center shadow-sm font-semibold mt-1 md:px-10 py-2 rounded bg-blueGray-800 text-sm text-blueGray-300 shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Sırala
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                                </Menu.Button>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className=" absolute w-full bg-white text-blueGray-800"
                                >
                                    <div className="cursor-pointer">
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    style={{borderBottom: "2px solid #1E293B"}}
                                                    className={classNames(
                                                        sort ? 'bg-indigo-500 text-white font-semibold' : 'bg-blueGray-600 text-blueGray-300 hover:bg-purple-400 font-semibold',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => {
                                                        setSort(true)
                                                        if (!sort) {
                                                            Swal.fire({
                                                                          timerProgressBar: true,
                                                                          showConfirmButton: false,
                                                                          timer: 500,
                                                                      })
                                                            Swal.showLoading()
                                                        }

                                                    }}
                                                >
                                                    En Yeni İlanlar {sort ? check : ""}
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    className={classNames(
                                                        sort ? 'bg-blueGray-600 text-blueGray-300 hover:bg-purple-400 font-semibold' : 'bg-indigo-500 text-white font-semibold',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => {
                                                        setSort(false)
                                                        if (sort) {
                                                            Swal.fire({
                                                                          timerProgressBar: true,
                                                                          showConfirmButton: false,
                                                                          timer: 500,
                                                                      })
                                                            Swal.showLoading()
                                                        }

                                                    }}
                                                >
                                                    En Eski İlanlar {sort ? "" : check}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
            {jobAdverts.filter((value) => {
                if (setSearchTerm == '') {
                    return value
                } else if (value.description.toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) || value.employer.companyName.toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) || value.jobPosition.jobTitle.toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) || value.city.cityName.toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) || value.upTime.toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) || value.typeOfEmployment.toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())) {

                    return value
                }
            }).map((jobAdvert, index) => (
                <div className="flex w-full bg-gray-200 dark:bg-gray-900 py-4" key={jobAdvert.id}>

                    <div className="container mx-auto px-6 flex items-start justify-center">
                        <div className="w-full rounded" style={{
                            borderBottom: index % 2 == 1 ? "5px solid #6366F1" : "5px solid #7D2BA3FF",
                            borderTop: index % 2 == 1 ? "5px solid #6366F1" : "5px solid #7D2BA3FF"
                        }}>
                            {/* Card is full width. Use in 12 col grid for best view. */}
                            {/* Card code block start */}
                            <div
                                className="bg-blueGray-700 flex flex-col lg:flex-row mx-auto shadow-lg dark:bg-gray-800 shadow rounded"
                                style={{backgroundColor: index % 2 == 1 ? "#c5d3e3" : ""}}>
                                <div className="lg:w-1/3 px-5 flex flex-col items-center py-16"
                                     style={{width: "15%", backgroundColor: index % 2 == 1 ? "#6366F1" : "#7D2BA3FF"}}>
                                    <h2 className={"text-white text mt-20 mr-2 ml-2"}>{index + 1}</h2>
                                </div>
                                <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-16">
                                    <div
                                        className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <img width={"128"} height={"128"}
                                             className="xl:w-8/12 h-full overflow-hidden object-cover rounded-full"
                                             src={`${jobAdvert.employer.pictureUrl}`} alt="avatar"/>
                                    </div>
                                    <h2 className={index % 2 == 1 ? "text-blueGray-800 dark:text-gray-100 text-xl tracking-normal font-semibold" : "text-blueGray-300 dark:text-gray-100 text-xl tracking-normal font-semibold"}>{jobAdvert.employer.companyName}</h2>
                                    <p className={index % 2 == 1 ? "flex text-blueGray-700 dark:text-gray-100 text-xs tracking-normal font-semibold mt-2 text-center" : "flex text-blueGray-400 dark:text-gray-100 text-xs tracking-normal font-semibold mt-2 text-center"}>
                                        <i className="fas fa-lg mr-1 mt-1 fa-map-marker-alt"></i>
                                        {jobAdvert.city.cityName}
                                    </p>
                                    <p className={index % 2 == 1 ? "text-blueGray-700 dark:text-gray-100 text-xs tracking-normal font-semibold mt-2 text-center w-10/12" : "text-blueGray-400 dark:text-gray-100 text-xs tracking-normal font-semibold mt-2 text-center w-10/12"}>
                                        <i className="fas fa-sm fa-phone mr-1"></i> {jobAdvert.employer.phoneNumber}
                                    </p>
                                    <p className={index % 2 == 1 ? "text-blueGray-700 dark:text-gray-100 text-xs tracking-normal font-semibold mt-2 text-center w-10/12" : "text-blueGray-400 dark:text-gray-100 text-xs tracking-normal font-semibold mt-2 text-center w-10/12"}>
                                        <span
                                            style={{display: "none"}}>{website = jobAdvert.employer.website.split('.')}</span>
                                        <i className="fas fa-globe-europe"></i> {website[1] + "." + website[2]}</p>

                                    <p className={index % 2 == 1 ? "text-blueGray-700 dark:text-gray-100 text-xs tracking-normal font-semibold mt-2 text-center w-10/12" : "text-blueGray-400 dark:text-gray-100 text-xs tracking-normal font-semibold mt-2 text-center w-10/12"}>
                                        <i className="far fa-envelope mt-1"></i> {jobAdvert.employer.email}</p>

                                </div>
                                <div className="w-full lg:w-1/3 px-12 flex flex-col items-center mt-16">
                                    <div
                                        className={index % 2 == 1 ? "mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-blueGray-900" : "mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-blueGray-200"}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="icon icon-tabler icon-tabler-stack" width={48} height={48}
                                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <polyline points="12 4 4 8 12 12 20 8 12 4"/>
                                            <polyline points="4 12 12 16 20 12"/>
                                            <polyline points="4 16 12 20 20 16"/>
                                        </svg>
                                        {/*<i className={"fas fa-3x fa-handshake"}></i>*/}
                                    </div>
                                    <h2 className={index % 2 == 1 ? "text-blueGray-800 dark:text-gray-100 text-xl tracking-normal text-center font-semibold mb-1" : "text-blueGray-300 dark:text-gray-100 text-xl tracking-normal text-center font-semibold mb-1"}>{jobAdvert.jobPosition.jobTitle}</h2>
                                    <p className={index % 2 == 1 ? "text-blueGray-700 dark:text-gray-100 text-sm tracking-normal font-semibold text-center" : "text-blueGray-400 dark:text-gray-100 text-sm tracking-normal font-semibold text-center"}>{jobAdvert.typeOfEmployment}/{jobAdvert.upTime}</p>
                                    <p className={index % 2 == 1 ? "text-blueGray-700 dark:text-gray-100 text-sm tracking-normal font-semibold mt-2 mb-6 text-center w-10/12" : "text-blueGray-400 dark:text-gray-100 text-sm tracking-normal font-semibold mt-2 mb-6 text-center w-10/12"}>{jobAdvert.description}</p>
                                    <button
                                        className={index % 2 == 1 ? "bg-indigo-500 border border-indigo-400 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-sm font-semibold uppercase px-6 py-2 rounded shadow mt-3 outline-none focus:outline-none mr-1 mb-1 w-10/12 ease-linear transition-all duration-250" : "bg-indigo-500 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-sm font-semibold uppercase px-6 py-2 rounded shadow mt-3 outline-none focus:outline-none mr-1 mb-1 w-10/12 ease-linear transition-all duration-250"}
                                        type="button"
                                    >
                                        Başvuru Yap
                                    </button>

                                </div>
                                <div
                                    className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                                    <h2 className={index % 2 == 1 ? "text-center text-sm text-blueGray-800 dark:text-gray-100 font-semibold tracking-normal" : "text-center text-sm text-blueGray-300 dark:text-gray-100 font-semibold tracking-normal"}>{jobAdvert.salary + " ₺"}</h2>
                                    <h2 className={index % 2 == 1 ? "text-center text-sm text-blueGray-600 dark:text-gray-100 font-semibold mt-2 mb-4 tracking-normal" : "text-center text-sm text-blueGray-400 dark:text-gray-100 font-semibold mt-2 mb-4 tracking-normal"}>Maaş</h2>
                                    <span style={{display: "none"}}>{airdate = jobAdvert.airdate.toString()
                                        .split("T")}</span>
                                    <h2 className={index % 2 == 1 ? "text-center text-sm text-blueGray-800 dark:text-gray-100 font-semibold tracking-normal" : "text-center text-sm text-blueGray-300 dark:text-gray-100 font-semibold tracking-normal"}>{airdate[0]}</h2>
                                    <h2 className={index % 2 == 1 ? "text-center text-sm text-blueGray-600 dark:text-gray-100 font-semibold mt-2 mb-4 tracking-normal" : "text-center text-sm text-blueGray-400 dark:text-gray-100 font-semibold mt-2 mb-4 tracking-normal"}>Başlangıç
                                                                                                                                                                                                                                                                             Tarihi</h2>
                                    <h2 className={index % 2 == 1 ? "text-center text-sm text-blueGray-800 dark:text-gray-100 font-semibold tracking-normal" : "text-center text-sm text-blueGray-300 dark:text-gray-100 font-semibold tracking-normal"}>{jobAdvert.deadline}</h2> {/*moment js kullanılabilir*/}
                                    <h2 className={index % 2 == 1 ? "text-center text-sm text-blueGray-600 dark:text-gray-100 font-semibold mt-2 mb-4 tracking-normal" : "text-center text-sm text-blueGray-400 dark:text-gray-100 font-semibold mt-2 mb-4 tracking-normal"}>Son
                                                                                                                                                                                                                                                                             Başvuru
                                                                                                                                                                                                                                                                             Tarihi</h2>
                                </div>
                                <div className="lg:w-1/3 flex flex-col items-center"
                                     style={{width: "15%", backgroundColor: index % 2 == 1 ? "#6366F1" : "#7D2BA3FF"}}>
                                    <button
                                        className="text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-sm font-bold uppercase h-full rounded shadow outline-none focus:outline-none px-3 ease-linear transition-all duration-250"
                                        type="button"
                                    >
                                        <i className="far fa-lg fa-heart"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className={"mt-2 mx-auto text-blueGray-900"}>
                <div className="flex flex-col cursor-pointer sm:flex-row items-center justify-center">
                    <div>
                    </div>
                    <div className="flex-1 flex flex-wrap rounded-full item-center justify-center"
                         style={{border: "5px solid rgba(125,43,163,0.4)", backgroundColor: "rgba(31,32,102,0.7)"}}>
                        <a
                            className="no-underline w-10 h-10 mx-2 rounded-full  sm:my-0 flex text-white justify-center items-center transition-colors duration-200 ease hover:bg-purple-400"
                            onClick={() => setPageNo(pageNo <= 1 ? 1 : pageNo - 1)}
                        >
                            <i className={"fas fa-chevron-left"}></i>
                        </a>
                        {
                            jobAdvertLength.map((jl, index) => (

                                paginationSize <= index ? "" : <a key={jl.id}
                                                                  className={pageNo == index + 1 ? "no-underline w-10 h-10 mx-2 sm:my-0 bg-indigo-500 flex rounded-full text-white justify-center items-center transition-colors duration-200 ease hover:bg-purple-400" : "no-underline w-10 h-10 mx-2 sm:my-0 flex rounded-full text-white justify-center items-center transition-colors duration-200 ease hover:bg-purple-400"}
                                                                  onClick={() => setPageNo(index + 1)}
                                >
                                    {paginationSize <= index ? null : index + 1}
                                </a>
                            ))
                        }
                        <a
                            className="no-underline w-10 h-10 mx-2 sm:my-0 rounded-full flex text-white justify-center items-center transition-colors duration-200 ease hover:bg-purple-400"
                            onClick={() => setPageNo(pageNo >= paginationSize ? paginationSize : pageNo + 1)}
                        >
                            <i className={"fas fa-chevron-right"}></i>
                        </a>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeJobAdvertList;

/*eslint-disable*/
import React, {useEffect, useState} from "react";

import HomeNavbar from "components/Navbars/HomeNavbar.js";
import Footer from "components/Footers/Footer.js";
import JobAdvertService from "../services/JobAdvertService";

export default function Home() {

    const [jobAdverts, setJobAdverts] = useState([]);

    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
    })

    let airdate;

    let website;

    return (
        <>
            <HomeNavbar fixed/>
            {/*<section className="header relative pt-16 items-center absolute h-screen max-h-860-px">*/}
            <h3 className="text-4xl mt-20 font-semibold leading-normal text-blueGray-800 text-center"><i
                className="fas fa-briefcase"></i> İş İlanları</h3>
            <div className="relative mt-3 lg:w-3/12 ml-auto mr-auto rounded">
              <span
                  className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
                <input
                    type="text"
                    placeholder="Örn: Google..."
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-300 relative bg-blueGray-800 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
            </div>
            {jobAdverts.map((jobAdvert, index) => (
                <div className="flex w-full bg-gray-200 dark:bg-gray-900 py-4">
                    <div className="container mx-auto px-6 flex items-start justify-center">
                        <div className="w-full">
                            {/* Card is full width. Use in 12 col grid for best view. */}
                            {/* Card code block start */}
                            <div
                                className="flex flex-col lg:flex-row mx-auto shadow-lg bg-blueGray-800 dark:bg-gray-800 shadow rounded">
                                <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                                    <div
                                        className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <img className="xl:w-8/12 h-full overflow-hidden object-cover rounded-full"
                                             src={require("assets/img/company_img.png").default} alt="avatar"/>
                                    </div>
                                    <h2 className="text-blueGray-300 dark:text-gray-100 text-xl tracking-normal font-medium">{jobAdvert.employer.companyName}</h2>
                                    <p className="flex text-blueGray-400 dark:text-gray-100 text-xs tracking-normal font-normal mt-2 text-center">
                                    <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="icon icon-tabler icon-tabler-map-pin" width={20} height={20}
                                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <circle cx={12} cy={11} r={3}/>
                                            <path
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>
                                        </svg>
                                    </span>
                                        {jobAdvert.city.cityName}
                                    </p>
                                    <p className="text-blueGray-400 dark:text-gray-100 text-xs tracking-normal font-normal mt-2 text-center w-10/12">
                                        <i className="fas fa-sm fa-phone mr-1"></i> {jobAdvert.employer.phoneNumber}</p>
                                    <p className="text-blueGray-400 dark:text-gray-100 text-xs tracking-normal font-normal mt-2 text-center w-10/12">
                                        <span
                                            style={{display: "none"}}>{website = jobAdvert.employer.website.split('.')}</span>
                                        <i className="fas fa-globe-europe"></i> {website[1] + "." + website[2]}</p>

                                    <p className="text-blueGray-400 dark:text-gray-100 text-xs tracking-normal font-normal mt-2 text-center w-10/12">
                                        <i className="far fa-envelope mt-1"></i> {jobAdvert.employer.email}</p>

                                </div>
                                <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                                    <div
                                        className="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer text-blueGray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="icon icon-tabler icon-tabler-stack" width={48} height={48}
                                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <polyline points="12 4 4 8 12 12 20 8 12 4"/>
                                            <polyline points="4 12 12 16 20 12"/>
                                            <polyline points="4 16 12 20 20 16"/>
                                        </svg>
                                    </div>
                                    <h2 className="text-blueGray-300 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">{jobAdvert.jobPosition.jobTitle}</h2>
                                    <p className="text-blueGray-400 dark:text-gray-100 text-sm tracking-normal font-normal text-center"></p>
                                    <p className="text-blueGray-400 dark:text-gray-100 text-sm tracking-normal font-normal mt-2 mb-6 text-center w-10/12">{jobAdvert.description}</p>
                                    <button
                                        className="bg-indigo-500 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg mt-3 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Başvuru Yap
                                    </button>

                                </div>
                                <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                                    <h2 className="text-center text-sm text-blueGray-300 dark:text-gray-100 font-medium tracking-normal">{jobAdvert.salary + " ₺"}</h2>
                                    <h2 className="text-center text-sm text-blueGray-400 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">Maaş</h2>
                                    <span style={{display: "none"}}>{airdate = jobAdvert.airdate.toString()
                                        .split("T")}</span>
                                    <h2 className="text-center text-sm text-blueGray-300 dark:text-gray-100 font-medium tracking-normal">{airdate[0]}</h2>
                                    <h2 className="text-center text-sm text-blueGray-400 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">Başlangıç
                                                                                                                                                   Tarihi</h2>
                                    <h2 className="text-center text-sm text-blueGray-300 dark:text-gray-100 font-medium tracking-normal">{jobAdvert.deadline}</h2>
                                    <h2 className="text-center text-sm text-blueGray-400 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">Son
                                                                                                                                                   Başvuru
                                                                                                                                                   Tarihi</h2>


                                </div>

                            </div>
                            {/* Card code block end */}
                        </div>
                    </div>
                </div>

            ))}
            {/*img dosyası*/}
            {/*<img*/}
            {/*    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"*/}
            {/*    src={require("assets/img/pattern_react.png").default}*/}
            {/*    alt="..."*/}
            {/*/>*/}
            {/*</section>*/}

            <section className="mt-20 relative bg-blueGray-100">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{transform: "translateZ(0)"}}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blueGray-100 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>
            <Footer/>
        </>
    );
}

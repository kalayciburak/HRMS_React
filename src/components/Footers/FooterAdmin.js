import React from "react";

export default function FooterAdmin() {
    return (
        <>
            <footer className="block py-4">
                <div className="container mx-auto px-4">
                    <hr className="mb-4 border-b-1 border-blueGray-600"/>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4">
                            <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                                Copyright © {new Date().getFullYear()} HRMS by{" "}
                                <a
                                    href="#"
                                    className="text-blueGray-800 hover:text-lightBlue-600 text-sm font-semibold py-1"
                                >
                                    Burak KALAYCI
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-8/12 px-4">
                            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                <li>
                                    <a
                                        href="#"
                                        className="text-blueGray-800 hover:text-lightBlue-600 text-sm font-semibold block py-1 px-3"
                                    >
                                        Burak KALAYCI
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-blueGray-800 hover:text-lightBlue-600 text-sm font-semibold block py-1 px-3"
                                    >
                                        Hakkımda
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

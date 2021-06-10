import React from "react";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-600 border-0">
                            <div className="flex-auto px-4 lg:px-10 py-10 mt-5 pt-0">
                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-white text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            E-Posta
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="E-posta adresi"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-white text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Şifre
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Şifre"
                                        />
                                    </div>
                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-lightBlue-600 text-white active:bg-blueGray-600 hover.bg-lightBlue-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Giriş Yap
                                        </button>
                                    </div>
                                </form>
                                <hr className="mt-6 border-b-1 border-blueGray-300"/>
                                <div className="rounded-t mt-1 mb-0 px-6 py-6">
                                    <div className="text-center mb-4">
                                        <h6 className="text-white text-sm font-bold">
                                            Sosyal hesap ile giriş yap
                                        </h6>
                                    </div>
                                    <div className="btn-wrapper text-center">
                                        <button
                                            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={require("assets/img/github.svg").default}
                                            />
                                            Github
                                        </button>
                                        <button
                                            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={require("assets/img/google.svg").default}
                                            />
                                            Google
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    className="text-blueGray-800"
                                >
                                    <small>Şifreni mi Unuttun?</small>
                                </a>
                            </div>
                            <div className="w-1/2 text-right">
                                <Link to="/auth/register" className="text-blueGray-800">
                                    <small>Yeni Hesap Oluştur</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

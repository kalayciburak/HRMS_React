import React from "react";

export default function Register() {
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-600 border-0">

                            <div className="flex-auto px-4 lg:px-10 mt-5 py-10 pt-0">
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
                                            className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                                            className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Şifre"
                                        />
                                    </div>
                                    <div className="relative w-full mb-5">
                                        <label
                                            className="block uppercase text-white text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Şifre Onay
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Şifre onay"
                                        />
                                    </div>

                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-lightBlue-500 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-white">
                        <a
                            href="#pablo"
                            className="text-lightBlue-500"
                            onClick={(e) => e.preventDefault()}
                        >
                          Hizmet Sözleşmesini
                        </a>{" "}onaylıyorum
                      </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-4">
                                        <button
                                            className="bg-lightBlue-600 active:bg-blueGray-600 hover.bg-lightBlue-300 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Hesap Oluştur
                                        </button>
                                    </div>
                                </form>
                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                                <div className="rounded-t mb-0 px-6 py-6">
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
                    </div>
                </div>
            </div>
        </>
    );
}

import React from 'react';

function EmployerRegister(props) {
    return (

        <div className="flex-auto px-4 lg:px-10 mt-5 py-2 pt-0">
            <form>
                <div className="relative w-full mb-3">
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Şirket Adı"
                    />
                </div>
                <div className="relative w-full mb-3">
                    <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="E-posta adresi"
                    />
                </div>

                <div className="relative w-full mb-3">
                    <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Şifre"
                    />
                </div>
                <div className="relative w-full mb-5">
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
                        Sosyal hesap ile kayıt ol
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
    );
}

export default EmployerRegister;

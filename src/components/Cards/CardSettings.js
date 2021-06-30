import React, {useEffect, useState} from "react";
import Select from 'react-select'
import SchoolService from "../../services/SchoolService"
import DepartmentService from "../../services/DepartmentService";
import LangugageService from "../../services/LangugageService";

export default function CardSettings() {

    const schoolService = new SchoolService();

    const departmentService = new DepartmentService();

    const languageService = new LangugageService();

    const [school, setSchool] = useState([]);

    const [department, setDepartment] = useState([]);

    const [language, setLanguage] = useState([]);

    const languageDegree = [
        {label: 'Orta Altı Seviye', value: 'A2'},
        {label: 'Orta Seviye', value: 'B1'},
        {label: 'Orta Üstü Seviye', value: 'B2'},
        {label: 'İleri Seviye', value: 'C1'},
        {label: 'Profesyonel Seviye', value: 'C2'}
    ]

    useEffect(() => {
        schoolService.getSchools().then((res) => setSchool(res.data.data))
        departmentService.getDepartments().then((res) => setDepartment(res.data.data))
        languageService.getLanguages().then((res) => setLanguage(res.data.data))
    }, []);

    return (
        <>
            <div
                className="relative flex flex-col mt-20 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700 border-0">

                <div className="flex-auto px-4 mt-6 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 className="text-blueGray-200 text-sm mt-3 mb-6 font-bold uppercase">
                            Kişisel Bilgiler
                        </h6>
                        <div className="flex flex-wrap">

                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder={"Ad"}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder={"Soyad"}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder={"E-Posta Adresi"}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder={"Tc kimlik numarası"}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="w-full mx-auto lg:w-12/12 px-12">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-300 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Hakkımda
                                    </label>
                                    <textarea
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        rows="2"
                                        placeholder={"Hobilerin, hedeflerin vb."}
                                        maxLength={200}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-200 text-sm mt-3 mb-6 font-bold uppercase">
                            Eğitim Bilgileri
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <Select className={"placeholder-blueGray-600 text-sm"}
                                            options={school.map((sc, e) => ({label: sc.schoolName, value: e}))}
                                            placeholder={"Üniversite Adı"}/>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <Select className={"placeholder-blueGray-600 text-sm"}
                                            options={department.map((dp, e) => ({label: dp.departmentName, value: e}))}
                                            placeholder={"Bölüm Adı"}/>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-400 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Başlangıç Tarihi
                                    </label>
                                    <input
                                        type="date"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-400 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Bitiş Tarihi
                                    </label>
                                    <input
                                        type="date"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-200 text-sm mt-3 mb-6 font-bold uppercase">
                            İş Tecrübeleri
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder={"Şirket Adı"}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder={"Pozisyon Adı"}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-400 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Başlangıç Tarihi
                                    </label>
                                    <input
                                        type="date"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-400 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Bitiş Tarihi
                                    </label>
                                    <input
                                        type="date"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-200 text-sm mt-3 mb-6 font-bold uppercase">
                            Yabancı Diller
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <Select className={"placeholder-blueGray-600 text-sm"}
                                            options={language.map((lg, e) => ({label: lg.languageName, value: e}))}
                                            placeholder={"Yabancı Dil"}/>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <Select className={"placeholder-blueGray-600 text-sm"}
                                            options={languageDegree}
                                            placeholder={"Dil Seviyesi"}/>

                                </div>
                            </div>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-200 text-sm mt-3 mb-6 font-bold uppercase">
                            Yetenekler/Teknolojiler
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full mx-auto lg:w-12/12 px-12">
                                <div className="relative w-full mb-3">
                                    <textarea
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        rows="2"
                                        placeholder={"Örn: Python,C#,Excel vb"}
                                        maxLength={200}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-200 text-sm mt-3 mb-6 font-bold uppercase">
                            Sosyal Hesaplar
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder={"Github Kullanıcı Adı"}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-12">
                                <div className="relative w-full mb-3">
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder={"Linkedin Kullanıcı Adı"}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <div className="w-full lg:w-6/12 px-12 mx-auto">
                            <div className="relative w-full mt-8">
                                <button
                                    className="bg-indigo-500 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-sm font-bold uppercase px-12 w-full py-3 rounded shadow mt-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Kaydet
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

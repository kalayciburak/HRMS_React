import React, {useEffect, useState} from "react";

import ProfileNavbar from "components/Navbars/ProfileNavbar.js";
import Footer from "components/Footers/Footer.js";
import JobSeekerService from "../services/JobSeekerService";
import CurriculaVaiteService from "../services/CurriculaVaiteService";
import EducationService from "../services/EducationService";
import JobExperienceService from "../services/JobExperienceService";
import JobSeekerLanguageService from "../services/JobSeekerLanguageService";
import TechnologieService from "../services/TechnologieService";
import SocialMediService from "../services/SocialMediService";

export default function Profile() {

    const jobSeekerService = new JobSeekerService();

    const curriculaVitaeService = new CurriculaVaiteService();

    const educationService = new EducationService();

    const jobExperienceService = new JobExperienceService();

    const languageService = new JobSeekerLanguageService();

    const technologyService = new TechnologieService();

    const socialMediaService = new SocialMediService();

    const [jobSeeker, setJobSeeker] = useState([]);

    const [cv, setCv] = useState([]);

    const [educations, setEducations] = useState([]);

    const [jobExperiences, setJobExperiences] = useState([]);

    const [languages, setLanguages] = useState([]);

    const [technologies, setTechnologies] = useState([]);

    const [socialMedias, setSocialMedias] = useState([]);

    let cvId = 1
    let jobSeekerId = 1

    useEffect(() => {
        let isMounted = true;
        socialMediaService.getSocialMediaByCurriculaVitaeId(cvId).then((res) => {
            if (isMounted) {
                setSocialMedias(res.data.data)
            }
        })
        technologyService.getTechnologieByCurriculaVitaeId(cvId).then((res) => {
            if (isMounted) {
                setTechnologies(res.data.data)
            }
        })
        languageService.getJobseekerLanguagesByCvId(cvId).then((res) => {
            if (isMounted) {
                setLanguages(res.data.data)
            }
        })
        jobExperienceService.getJobExperienceByCvId(cvId).then((res) => {
            if (isMounted) {
                setJobExperiences(res.data.data)
            }
        })
        educationService.getEducationsByCvId(cvId).then((res) => {
            if (isMounted) {
                setEducations(res.data.data)
            }
        })
        curriculaVitaeService.findCvByJobSeekerId(jobSeekerId).then((res) => {
            if (isMounted) {
                setCv(res.data.data)
            }
        })
        jobSeekerService.getJobSeekerById(jobSeekerId).then((result) => {
            if (isMounted) {
                setJobSeeker(result.data.data)
            }
        })
        return () => {
            isMounted = false;
        };
    }, [jobSeeker]);

    let plNames = technologies != null ? technologies.map((technology, index) => (technology.plName)) : "";

    return (
        <>
            <ProfileNavbar fixed/>
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
                        }}
                    >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-1/2 mx-auto mb-6 shadow-lg rounded-lg  border-0"
                        style={{marginTop: "-20em", background: "rgba(43,62,80,0.57)"}}>

                        <div className="flex-auto px-4 mt-6 lg:px-10 py-10 pt-0">
                            <div className="w-full px-4 flex justify-center">
                                <div className="relative">
                                    <img
                                        alt="..."
                                        src={cv.pictureUrl}
                                        className="shadow-xl px-6 py-4 rounded-full align-middle border-none flex lg:-ml-16 max-w-150-px"
                                        style={{marginLeft: "0"}}
                                    />
                                </div>
                                <div className="w-full absolute lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                                     style={{marginLeft: "27em"}}>
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button
                                            className="bg-indigo-500 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-sm font-bold uppercase px-6 py-2 rounded shadow mt-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-250"
                                            type="button"
                                        >
                                            <i className={"fas fa-lg fa-user-edit"}></i> Düzenle
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <form>
                                <h6 className="text-white text-sm mt-3 mb-6 font-bold uppercase">
                                    Kişisel Bilgiler
                                </h6>
                                <div className="flex flex-wrap">

                                    <div className="w-full lg:w-6/12 px-12">
                                        <div className="relative w-full mb-3">
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder={"Ad"}
                                                defaultValue={jobSeeker.firstName}
                                                style={{cursor: "default"}}
                                                readOnly={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-12">
                                        <div className="relative w-full mb-3">
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder={"Soyad"}
                                                defaultValue={jobSeeker.lastName}
                                                style={{cursor: "default"}}
                                                readOnly={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-12">
                                        <div className="relative w-full mb-3">
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder={"E-Posta Adresi"}
                                                defaultValue={jobSeeker.email}
                                                style={{cursor: "default"}}
                                                readOnly={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-12">
                                        <div className="relative w-full mb-3">
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder={"Tc kimlik numarası"}
                                                defaultValue={jobSeeker.identityNumber}
                                                style={{cursor: "default"}}
                                                readOnly={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto lg:w-12/12 px-12">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-200 text-xs mt-2 font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Hakkımda
                                            </label>
                                            <textarea
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                rows="2"
                                                placeholder={"Hobilerin, hedeflerin vb."}
                                                defaultValue={cv.coverLetter}
                                                style={{cursor: "default"}}
                                                maxLength={200}
                                                readOnly={true}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                                <h6 className="text-white text-sm mt-3 mb-6 font-bold uppercase">
                                    Eğitim Bilgileri
                                </h6>
                                {
                                    educations != null ? educations.map((education, index) => (
                                        <div className="flex flex-wrap" key={education.id}>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder={"Okul Adı"}
                                                        defaultValue={education.school.schoolName}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder={"Bölüm Adı"}
                                                        defaultValue={education.department.departmentName}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-200 text-xs font-semibold font-bold mb-2"
                                                    >
                                                        Başlangıç Tarihi
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        defaultValue={education.startDate}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-200 text-xs font-semibold font-bold mb-2"
                                                    >
                                                        Bitiş Tarihi
                                                    </label>
                                                    <input
                                                        type={education.endDate == null ? "text" : "date"}
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        defaultValue={education.endDate == null ? "Henüz mezun olmadı" : education.endDate}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <span className={"mt-2 mb-6 border-b-1 border-blueGray-300 mx-auto"}
                                                  style={index % 2 == 0 ? {
                                                      borderTop: "1px solid #CBD5E1",
                                                      width: "89%"
                                                  } : {}}></span>
                                        </div>

                                    )) : ""
                                }

                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                                <h6 className="text-white text-sm mt-3 mb-6 font-bold uppercase">
                                    İş Tecrübeleri
                                </h6>
                                {
                                    jobExperiences != null ? jobExperiences.map((jobExperience, index) => (
                                        <div className="flex flex-wrap" key={jobExperience.id}>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder={"Şirket Adı"}
                                                        defaultValue={jobExperience.companyName}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder={"Pozisyon Adı"}
                                                        defaultValue={jobExperience.positionName}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-200 text-xs font-semibold font-bold mb-2"
                                                    >
                                                        Başlangıç Tarihi
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        defaultValue={jobExperience.startDate}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-200 text-xs font-semibold font-bold mb-2"
                                                    >
                                                        Bitiş Tarihi
                                                    </label>
                                                    <input
                                                        type={jobExperience.endDate == null ? "text" : "date"}
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        defaultValue={jobExperience.endDate == null ? "Çalışmaya devam ediyor" : jobExperience.endDate}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <span className={"mt-2 mb-6 border-b-1 border-blueGray-300 mx-auto"}
                                                  style={index % 2 == 0 ? {
                                                      borderTop: "1px solid #CBD5E1",
                                                      width: "89%"
                                                  } : {}}></span>
                                        </div>
                                    )) : ""
                                }
                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                                <h6 className="text-white text-sm mt-3 mb-6 font-bold uppercase">
                                    Yabancı Diller
                                </h6>
                                {
                                    languages != null ? languages.map((language, index) => (
                                        <div className="flex flex-wrap" key={language.id}>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        style={{cursor: "default"}}
                                                        placeholder={"Yabancı Dil"}
                                                        defaultValue={language.language.languageName}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12">
                                                <div className="flex mb-3">
                                                    <span
                                                        type="text"
                                                        className="border-0 py-2 mx-auto text-center placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                                                        placeholder={"Dil Derecesi"}
                                                        style={{width: "77.48%"}}
                                                    >
                                                    <i className={"fas fa-lg fa-star"}
                                                       style={language.languageDegree >= 1 ? {color: "#6366F1"} : {}}></i>
                                                    <i className={"fas fa-lg fa-star"}
                                                       style={language.languageDegree >= 2 ? {color: "#6366F1"} : {}}></i>
                                                    <i className={"fas fa-lg fa-star"}
                                                       style={language.languageDegree >= 3 ? {color: "#6366F1"} : {}}></i>
                                                    <i className={"fas fa-lg fa-star"}
                                                       style={language.languageDegree >= 4 ? {color: "#6366F1"} : {}}></i>
                                                    <i className={"fas fa-lg fa-star"}
                                                       style={language.languageDegree == 5 ? {color: "#6366F1"} : {}}></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )) : ""
                                }
                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                                <h6 className="text-white text-sm mt-3 mb-6 font-bold uppercase">
                                    Yetenekler/Teknolojiler
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full mx-auto lg:w-12/12 px-12">
                                        <div className="relative w-full mb-3">
                                    <textarea
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        rows="2"
                                        placeholder={"Örn: Python,C#,Excel vb"}
                                        maxLength={200}
                                        defaultValue={plNames}
                                        readOnly={true}
                                        style={{cursor: "default"}}
                                    ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                                <h6 className="text-blueGray-200 text-sm mt-3 mb-6 font-bold uppercase">
                                    Sosyal Hesaplar
                                </h6>
                                {
                                    socialMedias != null ? socialMedias.map((socialMedia, index) => (
                                        <div className="flex flex-wrap" key={socialMedia.id}>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-200 text-xs font-semibold font-bold mb-2"
                                                    >
                                                        Github
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder={"Github Kullanıcı Adı"}
                                                        defaultValue={socialMedia.githubUsername}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-12">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-200 text-xs font-semibold font-bold mb-2"
                                                    >
                                                        Linkedin
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder={"Linkedin Kullanıcı Adı"}
                                                        defaultValue={socialMedia.linkedinUsername}
                                                        style={{cursor: "default"}}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )) : ""
                                }
                                {/*<hr className="mt-6 border-b-1 border-blueGray-300"/>*/}

                                {/*<div className="w-full lg:w-6/12 px-12 mx-auto">*/}
                                {/*    <div className="relative w-full mt-8">*/}
                                {/*        <button*/}
                                {/*            className="bg-indigo-500 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-sm font-bold uppercase px-12 w-full py-3 rounded shadow mt-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                                {/*            type="button"*/}
                                {/*        >*/}
                                {/*            Kaydet*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

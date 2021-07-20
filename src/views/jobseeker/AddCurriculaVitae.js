import React from 'react';
import Swal from "sweetalert2";
import {Form, Formik} from "formik";
import CurriculaVaiteService from "../../services/CurriculaVaiteService";
import Footer from "../../components/Footers/Footer";

function AddCurriculaVitae(props) {

    const curriculaVitaeService = new CurriculaVaiteService();

    let jobSeekerId = 42

    function addCv(cv) {
        return curriculaVitaeService.addCv(cv);
    }

    return (
        <>
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
                    <div className="w-1/2 mx-auto py-16"
                         style={{
                             marginTop: "-20rem",
                             background: "rgba(43,62,80,0.35)",
                             width: "30%",
                             border: "2px solid rgba(99,102,241,0.55)",
                             boxShadow: "3px 5px 4px rgba(0,0,0,0.64)"
                         }}>
                        <div className={"text-center "} style={{marginTop: "-3rem", marginBottom: "2rem"}}>
                            <h2 className={"text-3xl text-white"} style={{cursor: "default"}}>Cv Oluştur <i
                                className="cursor-pointer fas fa-sm fa-info-circle text-white right-0"
                                title={"Tıkla"}
                                onClick={() => {
                                    Swal.fire({
                                                  icon: "info",
                                                  iconColor: "#675CD8",
                                                  // background: "rgba(255,255,255,0.65)",
                                                  html: "<span style='font-size: 18px;color: black;'>Oluştur butonuna bastıktan sonra profilinize yönlendirileceksiniz ve bütün bilgilerinizi düzenleyebileceksiniz!</span>",
                                                  confirmButtonText: "Tamam",
                                              })
                                }}></i></h2>

                        </div>
                        <Formik initialValues={{
                            coverLetter: ""
                        }}
                                onSubmit={(values) => {
                                    const curriculaVitae = {
                                        id: 0,
                                        jobSeekerId: jobSeekerId,
                                        coverLetter: values.coverLetter,
                                        pictureUrl: ""
                                    };

                                    addCv(curriculaVitae).then((res) => {
                                        if (res.includes("Error")) {
                                            Swal.fire({
                                                          icon: 'error',
                                                          text: res.split("Error: ")[1],
                                                          confirmButtonText: `Tamam`,
                                                          backdrop: ` rgba(161,0,0,0.44) `
                                                      })
                                        } else {
                                            Swal.fire({
                                                          // background: "rgba(255,255,255,0.65)",
                                                          icon: 'success',
                                                          text: res.split("Success: ")[1],
                                                          confirmButtonText: `Tamam`,
                                                          timer: 7000,
                                                          backdrop: ` rgba(0,120,0,0.44) `
                                                      }).then((result) => {
                                                if (!result.isConfirmed) {
                                                    setTimeout(() => {
                                                        values = ''
                                                    }, 7000)
                                                    window.location.href = "../jobseeker/profile"
                                                } else {
                                                    setTimeout(() => {
                                                        values = ''
                                                    }, 7000)
                                                    window.location.href = "../jobseeker/profile"
                                                }
                                            })
                                        }
                                    }).catch((err) => {
                                        console.log(err)
                                    })
                                }}

                                className={"mx-auto"}>
                            {
                                ({
                                     values,
                                     handleChange
                                 }) => (<Form>
                                    <div className="mx-auto px-12">
                                        <div className="relative mx-auto mb-3">
                                            <label
                                                className="block uppercase text-white text-xs mt-2 font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Hakkımda
                                            </label>
                                            <textarea
                                                type="text"
                                                id={"coverLetter"}
                                                name={"coverLetter"}
                                                className="border-0 px-3 py-3 w-full placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                                                rows="3"
                                                placeholder={"Hobilerin, hedeflerin vb."}
                                                value={values.coverLetter}
                                                maxLength={200}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="flex mx-auto" style={{width: "30%"}}>
                                        <button
                                            className={values.coverLetter == '' ? "bg-blueGray-700 text-blueGray-500 text-sm font-bold uppercase px-12 w-full py-3 rounded shadow mt-3 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" : "bg-indigo-500 text-white active:bg-indigo-500 hover:bg-purple-400 text-sm font-bold uppercase px-12 w-full py-3 rounded shadow mt-3 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"}
                                            type="submit"
                                            disabled={values.coverLetter == '' ? true : false}
                                        >
                                            Oluştur
                                        </button>
                                    </div>
                                    <small style={{cursor: "default"}}
                                           className={"block font-semibold mt-2 text-center mx-auto w-full"}>Devam etmek
                                                                                                             için lütfen
                                                                                                             Cv'yi
                                                                                                             oluşturunuz!</small>
                                </Form>)
                            }
                        </Formik>

                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default AddCurriculaVitae;

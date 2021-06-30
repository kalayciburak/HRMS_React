import React from "react";
import {Link} from "react-router-dom";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import EmployerService from "../../services/EmployerService";

export default function Login() {

    const employerService = new EmployerService(); //! user service eklenecek..

    let isDisabled;

    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-blueGray-600 border-0">
                            <div className="flex-auto px-4 lg:px-10 py-2 mt-10 pt-0">
                                <Formik
                                    initialValues={{
                                        id: 0,
                                        email: "",
                                        password: ""
                                    }}
                                    validationSchema={Yup.object({
                                                                     email: Yup.string().email(
                                                                         "Email formata uygun değil!").required(
                                                                         "Bu alan boş bırakılamaz!"),
                                                                     password: Yup.string()
                                                                         .required("Bu alan boş bırakılamaz!")
                                                                         .min(
                                                                             6,
                                                                             "Şifre 6 karakterden kısa olamaz!")
                                                                         .max(17, "Şifre 17 karakterden uzun olamaz!")
                                                                 })}

                                    onSubmit={(values) => {
                                        const user = {
                                            id: values.id,
                                            email: values.email,
                                            password: values.password
                                        };
                                        //! addEmployer -> userLogin(user) olarak düzeltilecek!
                                        employerService.addEmployer(user).then((res) => {
                                            // console.log(res)
                                            if (res.includes("Error")) {
                                                Swal.fire({
                                                              icon: 'error',
                                                              text: res.split("Error: ")[1],
                                                              confirmButtonText: `Tamam`,
                                                              backdrop: ` rgba(161,0,0,0.44) `
                                                          })
                                            } else {
                                                Swal.fire({
                                                              icon: 'success',
                                                              text: res.split("Success: ")[1],
                                                              confirmButtonText: `Tamam`,
                                                              timer: 1500,
                                                              backdrop: ` rgba(0,120,0,0.44) `
                                                          }).then((result) => {
                                                    if (!result.isConfirmed) {
                                                        setTimeout(() => {
                                                            values = ''
                                                        }, 7000)
                                                        window.location.href = "Home.js"; //* giriş yapmış kullanıcıları anasayfaya yönlendir
                                                    } else {
                                                        setTimeout(() => {
                                                            values = ''
                                                        }, 7000)
                                                        window.location.href = "Home.js"
                                                    }
                                                })
                                            }
                                        }).catch((err) => {
                                            console.log(err.error)
                                        })
                                    }}

                                >
                                    {
                                        ({
                                             values,
                                             errors,
                                             touched,
                                             handleSubmit,
                                             handleChange,
                                             isSubmitting,
                                             dirty
                                         }) => (
                                            <Form>
                                                {isDisabled = (values.email == '' || values.password == '')}
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="email"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="E-posta adresi"
                                                        id={"email"}
                                                        onChange={handleChange}
                                                        value={values.email}
                                                    />
                                                    {errors.email && touched.email ? (
                                                        <div className={"text-red-500 mt-2"}>{errors.email}</div>
                                                    ) : null}
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="password"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="Şifre"
                                                        id="password"
                                                        value={values.password}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.password && touched.password ? (
                                                        <div className={"text-red-500 mt-2"}>{errors.password}</div>
                                                    ) : null}

                                                </div>
                                                <div className="text-center mt-4">
                                                    <button
                                                        className={isDisabled ? " bg-blueGray-700 text-blueGray-500 text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 " : "bg-lightBlue-600 active:bg-blueGray-600 hover.bg-lightBlue-300 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"}
                                                        type="submit"
                                                        disabled={isDisabled ? true : false}
                                                    >
                                                        Giriş Yap
                                                    </button>
                                                </div>
                                            </Form>
                                        )

                                    }
                                </Formik>
                                <hr className="mt-3 border-b-1 border-blueGray-300"/>
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
                        <div className="flex flex-wrap relative">
                            <div className="w-1/2">
                                <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    className="text-blueGray-800 hover:text-purple-400"
                                >
                                    <small>Şifreni mi Unuttun?</small>
                                </a>
                            </div>
                            <div className="w-1/2 text-right">
                                <Link to="/auth/register" className="text-blueGray-800 hover:text-purple-400">
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

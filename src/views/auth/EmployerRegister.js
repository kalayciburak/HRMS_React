import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from "yup"
import EmployerService from "../../services/EmployerService";
import Swal from "sweetalert2";

function EmployerRegister(props) {

    const employerService = new EmployerService();

    let isDisabled;

    return (

        <div className="flex-auto px-4 lg:px-10 mt-5 py-2 pt-0">
            <Formik
                initialValues={{
                    id: 0,
                    companyName: "",
                    email: "",
                    website: "",
                    phoneNumber: "",
                    password: "",
                    confirmPassword: "",
                    isTerm: false
                }}
                validationSchema={Yup.object({
                                                 companyName: Yup.string().required("Bu alan boş bırakılamaz!"),
                                                 email: Yup.string().email("Email formata uygun değil!").required(
                                                     "Bu alan boş bırakılamaz!"),
                                                 website: Yup.string().required("Bu alan boş bırakılamaz!"),
                                                 phoneNumber: Yup.string()
                                                     .required("Bu alan boş bırakılamaz!")
                                                     .min(
                                                         7,
                                                         "Geçerli bir numara giriniz!")
                                                     .max(14, "Geçerli bir numara giriniz!"),
                                                 password: Yup.string()
                                                     .required("Bu alan boş bırakılamaz!")
                                                     .min(
                                                         6,
                                                         "Şifre 6 karakterden kısa olamaz!")
                                                     .max(25, "Şifre 25 karakterden uzun olamaz!"),
                                                 confirmPassword: Yup.string().required("Bu alan boş bırakılamaz!"),
                                                 isTerm: Yup.boolean().required(
                                                     "Devam edebilmek için Sözleşmeyi onaylayınız!")
                                             })}

                onSubmit={(values) => {
                    if (!values.isTerm) {
                        console.log("sözleşme kabul edilmeli")

                    } else if (values.password != values.confirmPassword) {
                        console.log("Şifreler uyuşmuyor")
                    } else {
                        const employer = {
                            id: values.id,
                            companyName: values.companyName,
                            email: values.email,
                            website: values.website,
                            phoneNumber: values.phoneNumber,
                            password: values.password
                        };

                        employerService.addEmployer(employer).then((res) => {
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
                                              timer: 7000,
                                              backdrop: ` rgba(0,120,0,0.44) `
                                          }).then((result) => {
                                    if (!result.isConfirmed) {
                                        setTimeout(() => {
                                            values = ''
                                        }, 7000)
                                        window.location.href = "Login.js"
                                    } else {
                                        setTimeout(() => {
                                            values = ''
                                        }, 7000)
                                        window.location.href = "Login.js"
                                    }
                                })
                            }
                        }).catch((err) => {
                            console.log(err.error)
                        })
                    }
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
                            {isDisabled = (values.companyName == '' || values.email == '' || values.password == '' || values.confirmPassword == '' || values.website == '' || values.phoneNumber == '' || values.isTerm == false || values.password != values.confirmPassword)}
                            <div className="relative w-full mb-3">
                                <input
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Şirket Adı"
                                    id={"companyName"}
                                    onChange={handleChange}
                                    value={values.companyName}
                                />
                                {errors.companyName && touched.companyName ? (
                                    <div className={"text-red-500 font-semibold mt-2"}>{errors.companyName}</div>
                                ) : null}
                            </div>
                            <div className="relative w-full mb-3">
                                <input
                                    type="email"
                                    className="border-0 px-3 py-3 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="E-posta adresi"
                                    id={"email"}
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {errors.email && touched.email ? (
                                    <div className={"text-red-500 font-semibold mt-2"}>{errors.email}</div>
                                ) : null}
                            </div>
                            <div className="relative w-full mb-3">
                                <input
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Website adresi"
                                    id={"website"}
                                    onChange={handleChange}
                                    value={values.website}
                                />
                                {errors.website && touched.website ? (
                                    <div className={"text-red-500 font-semibold mt-2"}>{errors.website}</div>
                                ) : null}
                            </div>
                            <div className="relative w-full mb-3">
                                <input
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Telefon Numarası"
                                    id={"phoneNumber"}
                                    minLength={7}
                                    maxLength={14}
                                    onChange={handleChange}
                                    value={values.phoneNumber}
                                />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <div className={"text-red-500 font-semibold mt-2"}>{errors.phoneNumber}</div>
                                ) : null}
                            </div>
                            <div className="relative w-full mb-3">
                                <input
                                    type="password"
                                    className="border-0 px-3 py-3 font-semibold placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Şifre"
                                    id="password"
                                    maxLength={25}
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                {errors.password && touched.password ? (
                                    <div className={"text-red-500 font-semibold mt-2"}>{errors.password}</div>
                                ) : null}

                            </div>
                            <div className="relative w-full mb-5">
                                <input
                                    type="password"
                                    className="border-0 px-3 py-3 font-semibold placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Şifre onay"
                                    maxLength={25}
                                    id="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}

                                />
                                {
                                    (values.password != values.confirmPassword && values.confirmPassword != "") ?
                                        <span className={"block text-red-500 font-semibold mt-2"}>
                                    Şifreler uyuşmuyor </span> : ""
                                }
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div className={"text-red-500 font-semibold mt-2"}>{errors.confirmPassword}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox border-0 rounded font-semibold text-lightBlue-500 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                        id="isTerm"
                                        onChange={handleChange}
                                        onClick={() => values.isTerm = true}
                                    />
                                </label>
                                {errors.isTerm && touched.isTerm ? (
                                    <div className={"text-red-500 font-semibold mt-2"}>{errors.isTerm}</div>
                                ) : null}
                                <span className="ml-2 text-sm font-semibold text-white">
                        <a
                            href="#pablo"
                            className="text-lightBlue-500"
                            onClick={(e) => e.preventDefault()}
                        >
                          Hizmet Sözleşmesini
                        </a>{" "}onaylıyorum
                      </span>
                                {(values.isTerm ? "" :
                                    <span
                                        className={"text-red-500 font-semibold mt-2 block"}>Sözleşme kabul edilmeli!</span>)}
                            </div>
                            <div className="text-center mt-4 mb-3">
                                <button
                                    className={isDisabled ? " bg-blueGray-700 text-blueGray-500 text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 " : "bg-lightBlue-600 active:bg-blueGray-600 hover.bg-lightBlue-300 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"}
                                    type="submit"
                                    disabled={isDisabled ? true : false}
                                >
                                    Hesap Oluştur
                                </button>
                            </div>
                        </Form>
                    )

                }
            </Formik>
            {/*<hr className="mt-6 border-b-1 border-blueGray-300"/>*/}

            {/*<div className="rounded-t mb-0 px-6 py-6">*/}
            {/*    <div className="text-center mb-4">*/}
            {/*        <h6 className="text-white text-sm font-bold">*/}
            {/*            Sosyal hesap ile kayıt ol*/}
            {/*        </h6>*/}
            {/*    </div>*/}
            {/*    <div className="btn-wrapper text-center">*/}
            {/*        <button*/}
            {/*            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"*/}
            {/*            type="button"*/}
            {/*        >*/}
            {/*            <img*/}
            {/*                alt="..."*/}
            {/*                className="w-5 mr-1"*/}
            {/*                src={require("assets/img/github.svg").default}*/}
            {/*            />*/}
            {/*            Github*/}
            {/*        </button>*/}
            {/*        <button*/}
            {/*            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"*/}
            {/*            type="button"*/}
            {/*        >*/}
            {/*            <img*/}
            {/*                alt="..."*/}
            {/*                className="w-5 mr-1"*/}
            {/*                src={require("assets/img/google.svg").default}*/}
            {/*            />*/}
            {/*            Google*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default EmployerRegister;

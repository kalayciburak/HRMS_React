import React from 'react';
import JobSeekerService from "../../services/JobSeekerService";
import {Form, Formik} from 'formik';
import * as Yup from "yup";
import swal from 'sweetalert';

function JobseekerRegister(props) {

    const jobSeekerService = new JobSeekerService();

    let isDisabled;

    return (
        <div className="flex-auto px-4 lg:px-10 mt-5 py-2 pt-0">
            <Formik
                initialValues={{
                    id: 0,
                    firstName: "",
                    lastName: "",
                    identityNumber: "",
                    // birthDate: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    isTerm: false
                }}
                validationSchema={Yup.object({
                                                 firstName: Yup.string().required("Bu alan boş bırakılamaz!"),
                                                 email: Yup.string().email("Email formata uygun değil!").required(
                                                     "Bu alan boş bırakılamaz!"),
                                                 lastName: Yup.string().required("Bu alan boş bırakılamaz!"),
                                                 identityNumber: Yup.string()
                                                     .required("Bu alan boş bırakılamaz!"),
                                                 password: Yup.string()
                                                     .required("Bu alan boş bırakılamaz!")
                                                     .min(
                                                         6,
                                                         "Şifre 6 karakterden kısa olamaz!")
                                                     .max(17, "Şifre 17 karakterden uzun olamaz!"),
                                                 confirmPassword: Yup.string().required("Bu alan boş bırakılamaz!"),
                                                 // birthDate: Yup.string().required("Bu alan boş bırakılamaz!"),
                                                 isTerm: Yup.boolean().required(
                                                     "Devam edebilmek için Sözleşmeyi onaylayınız!")
                                             })}

                onSubmit={(values) => {
                    if (!values.isTerm) {
                        console.log("sözleşme kabul edilmeli")

                    } else if (values.password != values.confirmPassword) {
                        console.log("Şifreler uyuşmuyor")
                    } else {
                        const jobseeker = {
                            id: values.id,
                            firstName: values.firstName,
                            lastName: values.lastName,
                            identityNumber: values.identityNumber,
                            birthDate: values.birthDate,
                            email: values.email,
                            password: values.password
                        };

                        jobSeekerService.addJobSeeker(jobseeker).then((res) => {
                            console.log(res)
                            swal(res);
                        }).catch((err) => {
                            console.log(err)
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
                            {isDisabled = (values.firstName == '' || values.lastName == '' || values.ídentityNumber == '' || values.identityNumber.length < 11 || values.birthDate == '' || values.email == '' || values.confirmPassword == '' || values.isTerm == false || values.password != values.confirmPassword)}
                            <div className="flex w-full mb-3">
                                <input type="text"
                                       className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 mr-2 bg-white rounded text-sm shadow focus:outline-none focus:ring w-1/2 ease-linear transition-all duration-150"
                                       placeholder="İsim"
                                       id="firstName"
                                       value={values.firstName}
                                       onChange={handleChange}
                                />
                                <input type="text"
                                       className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-1/2 ease-linear transition-all duration-150"
                                       placeholder="Soyisim"
                                       id="lastName"
                                       value={values.lastName}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className={"w-full flex mb-3 mt-1"}>
                                {errors.firstName && touched.firstName ? (
                                    <div
                                        className={"text-red-500 w-1/2"}>{errors.firstName}</div>
                                ) : null}
                                {errors.lastName && touched.lastName ? (
                                    <div
                                        className={"text-red-500 w-1/2 "}>{errors.lastName}</div>
                                ) : null}
                            </div>
                            <div className="relative w-full mb-3">
                                <input type="text"
                                       className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                       placeholder="Tc kimlik numarası"
                                       id="identityNumber"
                                       maxLength={"11"}
                                       value={values.identityNumber}
                                       onChange={handleChange}
                                />
                                {
                                    (values.identityNumber.length < 11 && values.identityNumber != "") ?
                                        <span className={"block text-red-500 mt-2"}>
                                    Gerçek bir kişi değil </span> : ""
                                }
                            </div>
                            <div className="relative w-full mb-3">
                                <input type="date"
                                       className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                       placeholder="Doğum Tarihi"
                                       id="birthDate"
                                       value={values.birthDate}
                                       onChange={handleChange}

                                />
                                {/*{errors.birthDate && touched.birthDate ? (*/}
                                {/*    <div className={"text-red-500 mt-2"}>{errors.birthDate}</div>*/}
                                {/*) : null}*/}
                            </div>
                            <div className="relative w-full mb-3">
                                <input
                                    type="email"
                                    className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="E-posta adresi"
                                    id={"email"}
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && touched.email ? (
                                    <div className={"text-red-500 mt-2"}>{errors.email}</div>
                                ) : null}
                            </div>
                            <div className="relative w-full mb-3">
                                <input type="password"
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
                            <div className="relative w-full mb-5">
                                <input
                                    type="password"
                                    className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Şifre onay"
                                    id="confirmPassword"
                                    onChange={handleChange}
                                    value={values.confirmPassword}

                                />
                                {
                                    (values.password != values.confirmPassword && values.confirmPassword != "") ?
                                        <span className={"block text-red-500 mt-2"}>
                                    Şifreler uyuşmuyor </span> : ""
                                }
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div className={"text-red-500 mt-2"}>{errors.confirmPassword}</div>
                                ) : null}
                            </div>

                            <div>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox border-0 rounded text-lightBlue-500 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                        id="isTerm"
                                        onChange={handleChange}
                                        onClick={() => values.isTerm = true}
                                    />
                                </label>
                                {errors.isTerm && touched.isTerm ? (
                                    <div className={"text-red-500 mt-2"}>{errors.isTerm}</div>
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
                                    <span className={"text-red-500 mt-2 block"}>Sözleşme kabul edilmeli!</span>)}
                            </div>

                            <div className="text-center mt-4 mb-3">
                                <button
                                    className={isDisabled ? " bg-blueGray-700 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 " : "bg-lightBlue-600 active:bg-blueGray-600 hover.bg-lightBlue-300 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"}
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
            {/*            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex ites-center font-bold text-xs ease-linear transition-all duration-150"*/}
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

export default JobseekerRegister;

import React from "react";
import SystemPersonelService from "../../services/SystemPersonelService";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    const personelService = new SystemPersonelService();

    let isDisabled;
    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className={"absolute bg-emerald-500 text-white rounded-full font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none ease-linear transition-all duration-150"}>
                <i className="fas fa-plus"></i> Personel Ekle
            </button>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center mt-6 flex overflow-x-hidden overflow-y-auto fixed inset-0 rounded z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative bg-blueGray-800 flex flex-col w-full outline-none focus:outline-none">
                                {/*header*/}
                                {/*body*/}
                                <Formik
                                    initialValues={{
                                        id: 0,
                                        username: "",
                                        email: "",
                                        website: "",
                                        password: "",
                                    }}
                                    validationSchema={Yup.object({
                                                                     username: Yup.string().required(
                                                                         "Bu alan boş bırakılamaz!"),
                                                                     email: Yup.string().email(
                                                                         "Email formata uygun değil!").required(
                                                                         "Bu alan boş bırakılamaz!"),
                                                                     password: Yup.string()
                                                                         .required("Bu alan boş bırakılamaz!")
                                                                         .min(
                                                                             6,
                                                                             "Şifre 6 karakterden kısa olamaz!")
                                                                         .max(25, "Şifre 25 karakterden uzun olamaz!"),
                                                                 })}

                                    onSubmit={(values) => {
                                        const personel = {
                                            id: values.id,
                                            username: values.username,
                                            email: values.email,
                                            password: values.password
                                        };

                                        personelService.addSystemPersonel(personel).then((res) => {
                                            // console.log(res)
                                            if (res.includes("Error")) {
                                                Swal.fire({
                                                              icon: 'error',
                                                              text: res.split("Error: ")[1],
                                                              confirmButtonText: `Tamam`,
                                                              backdrop: ` rgba(161,0,0,0.44)
                                                          url("/images/nyan-cat.gif")
                                                          left top
                                                          no-repeat
                                                        `
                                                          })
                                            } else {
                                                Swal.fire({
                                                              icon: 'success',
                                                              text: res.split("Success: ")[1],
                                                              confirmButtonText: `Tamam`,
                                                              timer: 1500,
                                                              backdrop: ` rgba(0,120,0,0.44)
                                                          url("/images/nyan-cat.gif")
                                                          left top
                                                          no-repeat
                                                        `
                                                          }).then((result) => {
                                                    if (!result.isConfirmed) {
                                                        setShowModal(false)
                                                    } else {
                                                        setShowModal(false)
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
                                                {isDisabled = (values.username == '' || values.email == '' || values.password == '')}
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="text"
                                                        className="border-blueGray-600 px-4 py-3 mt-2 placeholder-blueGray-300 font-semibold text-white bg-blueGray-800 rounded-full shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="Kullanıcı Adı"
                                                        id={"username"}
                                                        onChange={handleChange}
                                                        value={values.username}
                                                    />
                                                    {errors.username && touched.username ? (
                                                        <div
                                                            className={"ml-2 text-red-500 mt-2"}>{errors.username}</div>
                                                    ) : null}
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="email"
                                                        className="border-blueGray-600 px-4 py-3 placeholder-blueGray-300 text-white font-semibold bg-blueGray-800 rounded-full shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="E-posta adresi"
                                                        id={"email"}
                                                        onChange={handleChange}
                                                        value={values.email}
                                                    />
                                                    {errors.email && touched.email ? (
                                                        <div
                                                            className={"ml-2 text-red-500 mt-2 bg-blueGray-800"}>{errors.email}</div>
                                                    ) : null}
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <input
                                                        type="password"
                                                        className="border-blueGray-600 px-4 py-3 placeholder-blueGray-300 text-white font-semibold bg-blueGray-800 rounded-full shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="Şifre"
                                                        id="password"
                                                        maxLength={25}
                                                        value={values.password}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.password && touched.password ? (
                                                        <div
                                                            className={"ml-2 text-red-500 mt-2"}>{errors.password}</div>
                                                    ) : null}

                                                </div>
                                                <div
                                                    className="flex items-center mb-2 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="text-white bg-red-500 rounded-full font-bold mt-2 ml-1 uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-200"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Vazgeç
                                                    </button>
                                                    <button
                                                        className={isDisabled ? " mt-2 mr-1 rounded-full bg-blueGray-700 text-white text-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 " : "mt-2 mr-1 bg-emerald-500 text-white active:bg-emerald-600 font-bold rounded-full uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"}
                                                        type="submit"
                                                        disabled={isDisabled ? true : false}
                                                    >
                                                        Oluştur
                                                    </button>

                                                </div>
                                            </Form>
                                        )

                                    }
                                </Formik>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

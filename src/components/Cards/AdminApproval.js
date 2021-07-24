import React, {useEffect, useState} from 'react';
import swal from "@sweetalert/with-react";
import Swal from "sweetalert2";
import SystemPersonelService from "../../services/SystemPersonelService";
import EmployerUpdateService from "../../services/EmployerUpdateService";
import EmployerService from "../../services/EmployerService";
import logo from "../../assets/img/logo.png";

function AdminApproval(props) {

    const systemPersonelService = new SystemPersonelService();

    const employerUpdateService = new EmployerUpdateService();

    const employerService = new EmployerService();

    const [updatedEmployers, setUpdatedEmployers] = useState([]);

    const [employerUpdate, setEmployerUpdate] = useState([]);

    useEffect(() => {
        let isMounted = true
        systemPersonelService.getEmployerByUpdatedTrue().then((res) => {
            if (isMounted) setUpdatedEmployers(res.data.data)
        })
        return () => {
            isMounted = false
        }
    }, [])

    function getEmployers() {
        systemPersonelService.getEmployerByUpdatedTrue().then((res) => {
            setUpdatedEmployers(res.data.data)
        })
    }

    function approveEmployerUpdate(id) {
        employerUpdateService.getEmployerUpdateById(id).then((res) => {
            setEmployerUpdate(res.data.data)
        })
    }

    function denyEmployerUpdate() {
        employerService.changeisUpdated(false, employerUpdate.id).then(() => {
            getEmployers()
            employerUpdateService.deleteEmployerUpdateById(employer.id)
        })
    }

    function updateEmployer() {
        employerService.updateEmployer(employer).then(() => {
            employerService.changeisUpdated(false, employerUpdate.id)
            getEmployers()
            employerUpdateService.deleteEmployerUpdateById(employer.id)
        })
    }

    let employer = {
        id: employerUpdate.id,
        companyName: employerUpdate.companyName,
        email: employerUpdate.email,
        website: employerUpdate.website,
        phoneNumber: employerUpdate.phoneNumber,
        password: employerUpdate.password
    }

    return (
        <div>
            {
                updatedEmployers != "" ? <div><h3
                    className="text-4xl mb-2 mt-20 font-semibold leading-normal text-blueGray-600  text-center"><i
                    className="fas fa-building"></i> Güncelleme Onayı Bekleyen Şirketler</h3>
                    <div
                        className={"relative flex flex-col mx-auto min-w-0 break-words w-1/2 mb-6 shadow-lg text-white rounded-lg bg-blueGray-800"}>
                        <div className="block overflow-x-auto rounded-lg ">
                            {/* Projects table */}
                            <table
                                className="items-center w-full bg-transparent border-collapse tr-even:bg-red-200 rounded-lg">
                                <thead>
                                <tr>
                                    <th
                                        className={
                                            "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                        }
                                    >
                                        Şirket Adı
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                        }
                                    >
                                        Yapılan Değişiklikler
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                        }
                                    ></th>
                                </tr>
                                </thead>
                                <tbody>
                                {updatedEmployers.map((employers, index) => (
                                    <tr className={index % 2 == 0 ? "bg-blueGray-600 hover:bg-purple-250 font-semibold" : "bg-blueGray-800 hover:bg-indigo-250 font-semibold"}
                                        key={employers.id} onMouseOver={() => {
                                        approveEmployerUpdate(employers.id)
                                    }}>
                                        <td className="border-b border-indigo-400 px-6 text-white align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                            {employers.companyName}
                                        </td>
                                        <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                            <button
                                                className="bg-indigo-500 text-blueGray-300 mr-2 active:bg-indigo-500 hover:bg-purple-400 text-xs font-bold px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-250"
                                                onClick={() => {
                                                    swal(<div className={"text-left text-lg"}>
                                                        {employers.companyName != employer.companyName ?
                                                            <h1>{employers.companyName} <i
                                                                className={"fas fa-arrow-right"}> </i> <span
                                                                className={"text-orange-500 font-bold"}>{employer.companyName}</span>
                                                            </h1> :
                                                            <h1>Şirket Adı <i className={"fas fa-arrow-right"}> </i>
                                                                <span style={{color: "#6366f1"}}
                                                                      className={"font-semibold"}>Değişiklik Yok!</span>
                                                            </h1>}
                                                        {employers.phoneNumber != employer.phoneNumber ?
                                                            <h1 className={"mt-2"}>{employers.phoneNumber} <i
                                                                className={"fas fa-arrow-right"}> </i> <span
                                                                className={"text-orange-500 font-bold"}>{employer.phoneNumber}</span>
                                                            </h1> : <h1 className={"mt-2"}>Telefon No: <span
                                                                style={{color: "#6366f1"}} className={"font-semibold"}>Değişiklik Yok!</span>
                                                            </h1>}
                                                        {employers.website != employer.website ?
                                                            <h1 className={"mt-2"}>{employers.website} <i
                                                                className={"fas fa-arrow-right"}> </i> <span
                                                                className={"text-orange-500 font-bold"}>{employer.website}</span>
                                                            </h1> : <h1 className={"mt-2"}>Website <i
                                                                className={"fas fa-arrow-right"}> </i> <span
                                                                style={{color: "#6366f1"}} className={"font-semibold"}>Değişiklik Yok!</span>
                                                            </h1>}
                                                        {employers.email != employer.email ?
                                                            <h1 className={"mt-2"}>{employers.email} <i
                                                                className={"fas fa-arrow-right"}> </i> <span
                                                                className={"text-orange-500 font-bold"}>{employer.email}</span>
                                                            </h1> : <h1 className={"mt-2"}>E-Posta <i
                                                                className={"fas fa-arrow-right"}> </i> <span
                                                                style={{color: "#6366f1"}} className={"font-semibold"}>Değişiklik Yok!</span>
                                                            </h1>}
                                                    </div>)
                                                }}>
                                                <i className={"fas fa-lg fa-info-circle"}></i> <span
                                                style={{fontSize: "15px"}}>Değişiklikler</span>
                                            </button>
                                        </td>
                                        <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                            <button
                                                onClick={() => {
                                                    Swal.fire({
                                                                  icon: 'warning',
                                                                  title: 'Emin misiniz?',
                                                                  showDenyButton: true,
                                                                  // showCancelButton: true,
                                                                  confirmButtonText: `Onayla`,
                                                                  denyButtonText: `Vazgeç`,
                                                                  allowOutsideClick: false,
                                                              }).then((result) => {
                                                        // console.log(employer)
                                                        /* Read more about isConfirmed, isDenied below */
                                                        if (result.isConfirmed) {
                                                            updateEmployer()
                                                            const Toast = Swal.mixin({
                                                                                         toast: true,
                                                                                         position: 'top-end',
                                                                                         showConfirmButton: false,
                                                                                         timer: 3000,
                                                                                         timerProgressBar: true,
                                                                                         background: "#66B96F",
                                                                                         didOpen: (toast) => {
                                                                                             toast.addEventListener(
                                                                                                 'mouseenter',
                                                                                                 Swal.stopTimer)
                                                                                             toast.addEventListener(
                                                                                                 'mouseleave',
                                                                                                 Swal.resumeTimer)
                                                                                         }
                                                                                     })

                                                            Toast.fire({
                                                                           icon: 'success',
                                                                           html: "<h1 style='font-family: Ubuntu;color: white;'>Şirket bilgileri güncellendi!</h1>"
                                                                       })
                                                        } else if (result.isDenied) {
                                                            Swal.fire({
                                                                          position: 'center',
                                                                          icon: 'info',
                                                                          title: 'İşlemi iptal ettiniz!',
                                                                          showConfirmButton: false,
                                                                          timer: 1500
                                                                      })
                                                        }
                                                    })
                                                }}
                                                className="bg-emerald-500 text-blueGray-300 mr-2 active:bg-indigo-500 hover:bg-lightBlue-300 text-xs font-bold uppercase px-3 py-1 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-250">
                                                <i className={"fas fa-lg fa-check"}></i>
                                            </button>
                                            |
                                            <button
                                                onClick={() => {
                                                    Swal.fire({
                                                                  icon: 'warning',
                                                                  title: 'Emin misiniz?',
                                                                  showDenyButton: true,
                                                                  // showCancelButton: true,
                                                                  confirmButtonText: `Kaldır`,
                                                                  denyButtonText: `Vazgeç`,
                                                                  allowOutsideClick: false,
                                                              }).then((result) => {
                                                        // console.log(employer)
                                                        /* Read more about isConfirmed, isDenied below */
                                                        if (result.isConfirmed) {
                                                            denyEmployerUpdate()
                                                            const Toast = Swal.mixin({
                                                                                         toast: true,
                                                                                         position: 'top-end',
                                                                                         showConfirmButton: false,
                                                                                         timer: 3000,
                                                                                         timerProgressBar: true,
                                                                                         background: "#99001b",
                                                                                         didOpen: (toast) => {
                                                                                             toast.addEventListener(
                                                                                                 'mouseenter',
                                                                                                 Swal.stopTimer)
                                                                                             toast.addEventListener(
                                                                                                 'mouseleave',
                                                                                                 Swal.resumeTimer)
                                                                                         }
                                                                                     })

                                                            Toast.fire({
                                                                           icon: 'success',
                                                                           html: "<h1 style='font-family: Ubuntu;color: white;'>Şirket bilgileri güncelleme isteği Reddedildi!</h1>"
                                                                       })
                                                        } else if (result.isDenied) {
                                                            Swal.fire({
                                                                          position: 'center',
                                                                          icon: 'info',
                                                                          title: 'İşlemi iptal ettiniz!',
                                                                          showConfirmButton: false,
                                                                          timer: 1500
                                                                      })
                                                        }
                                                    })
                                                }}
                                                className="bg-red-500 text-blueGray-300 ml-2 active:bg-indigo-500 hover:bg-purple-400 text-xs font-bold uppercase px-4 py-1 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-250">
                                                <i className={"fas fa-lg fa-times"}></i>
                                            </button>
                                        </td>
                                    </tr>

                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> : <div className={"mx-auto w-1/2"}>
                    {/*<img src={"https://i.ibb.co/4pnb4G3/Untitled-2.png"} />*/}
                    <img src={logo}/>
                    <h1 className="text-4xl font-semibold leading-normal text-blueGray-800 text-center"
                        style={{marginTop: -20}}>Onay bekleyen işlem bulunamadı!</h1>
                </div>
            }
        </div>
    );
}

export default AdminApproval;

import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

// components
import JobAdvertDropdown from "components/Dropdowns/jobAdvertDropdown.js";
import JobAdvertService from "../../services/JobAdvertService";
import EmployerService from "../../services/EmployerService";
import SystemPersonelService from "../../services/SystemPersonelService";
import ProfileNavbar from "../../components/Navbars/ProfileNavbar";
import Footer from "../../components/Footers/Footer";
import AddJobAdvert from "../../components/Modals/AddJobAdvert";
import Swal from "sweetalert2";
import isURL from 'validator/lib/isURL'
import EmployerUpdateService from "../../services/EmployerUpdateService";

export default function EmployerProfile() {

    const jobAdvertService = new JobAdvertService();

    const employerService = new EmployerService();

    const employerUpdateService = new EmployerUpdateService();

    const systemPersonelService = new SystemPersonelService();

    const [jobAdverts, setJobAdverts] = useState([]);

    const [confirmed, setConfirmed] = useState(true);

    const [searchTerm, setSearchTerm] = useState('')

    const [employer, setEmployer] = useState([]);

    const [updateEmployerInformation, setUpdatedEmployerInformation] = useState({});

    let employerId = 13; // giriş yapmış olan employerın idsini çekceceğiz

    useEffect(() => {

        let isMounted = true;
        employerService.getEmployerById(employerId).then((result) => {
            if (isMounted) {
                return setEmployer(result.data.data)
            }
        })
        jobAdvertService.getJobAdvertByEmployerId(employerId).then((result) => {
            if (isMounted) return setJobAdverts(result.data.data)
        });

        return () => {
            isMounted = false
        }
    }, []);

    let airdate;

    function deleteJobAdvert(id) {
        jobAdvertService.deleteJobAdvertById(id).then(() => {
            getJobAdverts()
        })
        // const filteredJobAdverts = jobAdverts.filter((jobAdvert) => jobAdvert.id != id)
        // setJobAdverts(filteredJobAdverts)
    }

    function getJobAdverts() {
        jobAdvertService.getJobAdvertByCompanyName("Microsoft").then((res) => {
            setJobAdverts(res.data.data)
        })
    }

    function getEmployer() {
        employerService.getEmployerById(13).then((res) => {
            setEmployer(res.data.data)
        })
    }

    function uploadImage() {
        document.getElementById("image").src = "https://res.cloudinary.com/torukobyte/image/upload/v1625589853/svg-cloud-upload-long-shadow-icon-1_akc2uc.png";
    }

    function originalImage() {
        document.getElementById("image").src = employer.pictureUrl;
        document.getElementById("image").title = "Fotoğraf Yükle";
    }

    function updateEmployer(employerUpdate) {
        employerService.changeisUpdated(true, employer.id).then(() => {
            employerUpdateService.addEmployerUpdate(employerUpdate)
            getEmployer()
        })
    }

    return (

        <div className={"bg-blueGray-200"}>
            <ProfileNavbar fixed/>
            <div className={"bg-blueGray-200"}>
                <main className="profile-page">
                    <section className="relative block h-500-px">
                        <div
                            className="absolute top-0 w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage:
                                    "url('https://i.ibb.co/NFVYQNp/wallhaven-0qkg1q.jpg')",
                            }}
                        >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-50 bg-blueGray-800"
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
                    <section className="relative mt-12 py-16 bg-blueGray-200">
                        <div
                            className="relative flex flex-col min-w-0 break-words w-1/2 mx-auto mb-6 shadow-lg rounded-lg  border-0"
                            style={{
                                marginTop: "-20em",
                                background: "rgba(43,62,80,0.3)",
                                border: "2px solid rgba(99,102,241,0.55)",
                                boxShadow: "3px 5px 4px rgba(0,0,0,0.64)"
                            }}>
                            <div className="flex-auto px-4 mt-6 lg:px-10 py-10 pt-0">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="relative">
                                        <img
                                            id={"image"}
                                            alt="..."
                                            src={employer.pictureUrl}
                                            className="shadow-xl rounded-full cursor-pointer hover:bg-purple-400 align-middle mt-2 border-none flex lg:-ml-16 max-w-150-px"
                                            onMouseOver={() => {
                                                uploadImage()
                                            }}
                                            onMouseOut={() => {
                                                originalImage()
                                            }}
                                            style={{marginLeft: "-24rem", border: "2px solid rgba(99,102,241,0.3)"}}
                                            onClick={async () => {
                                                const {value: file} = await Swal.fire({
                                                                                          title: 'Fotoğraf Seç',
                                                                                          input: 'file',
                                                                                          inputAttributes: {
                                                                                              'accept': 'image/*',
                                                                                              'aria-label': 'Upload your profile picture'
                                                                                          },
                                                                                          showCancelButton: true,
                                                                                          cancelButtonText: "Vazgeç",
                                                                                          confirmButtonText: "Kaydet"
                                                                                      })

                                                if (file) {
                                                    const reader = new FileReader()
                                                    reader.onload = (e) => {
                                                        Swal.fire({
                                                                      title: 'Your uploaded picture',
                                                                      imageUrl: e.target.result,
                                                                      imageAlt: 'The uploaded picture'
                                                                  })
                                                    }
                                                    reader.readAsDataURL(file)
                                                }
                                            }}
                                        />
                                    </div>
                                    {/*<div*/}
                                    {/*    className="w-full absolute lg:w-6/12 lg:order-3 lg:text-left lg:self-center">*/}
                                    {/*    <h2 className={"text text-4xl text-white"}>{employer.companyName}</h2>*/}
                                    {/*</div>*/}
                                    <div
                                        className="w-full absolute lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                                        style={{marginLeft: "27em"}}>
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            {
                                                employer.updated ? <button
                                                    className="bg-red-500 text-blueGray-300 text-sm font-bold uppercase px-6 py-2 rounded shadow mt-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-250"
                                                    style={{cursor: "progress"}}>Onay Bekleniyor</button> : <button
                                                    className="bg-indigo-500 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-sm font-bold uppercase px-6 py-2 rounded shadow mt-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-250"
                                                    onClick={async () => {
                                                        const {value: companyName} = await Swal.fire({
                                                                                                         title: '1/4 Şirket Adı',
                                                                                                         input: 'text',
                                                                                                         inputPlaceholder: 'Şirket adı giriniz',
                                                                                                         inputValue: employer.companyName,
                                                                                                         showCancelButton: true,
                                                                                                         cancelButtonText: "Vazgeç",
                                                                                                         confirmButtonText: "Devam Et",
                                                                                                         allowOutsideClick: false,
                                                                                                         inputAttributes: {
                                                                                                             maxlength: 35
                                                                                                         },

                                                                                                         inputValidator: (value) => {
                                                                                                             return new Promise(
                                                                                                                 (resolve) => {
                                                                                                                     if (value != '') {
                                                                                                                         resolve()
                                                                                                                     } else {
                                                                                                                         resolve(
                                                                                                                             'Bu alan boş bırakılamaz!')
                                                                                                                     }
                                                                                                                 })
                                                                                                         }
                                                                                                     })

                                                        if (companyName) {
                                                            const {value: email} = await Swal.fire({
                                                                                                       title: '2/4 E-Posta',
                                                                                                       input: 'email',
                                                                                                       inputPlaceholder: 'E-posta giriniz',
                                                                                                       inputValue: employer.email,
                                                                                                       showCancelButton: true,
                                                                                                       cancelButtonText: "Vazgeç",
                                                                                                       confirmButtonText: "Devam Et",
                                                                                                       allowOutsideClick: false,
                                                                                                       inputAttributes: {
                                                                                                           maxlength: 50
                                                                                                       },

                                                                                                       inputValidator: (value) => {
                                                                                                           let re = /\S+@\S+\.\S+/;
                                                                                                           return new Promise(
                                                                                                               (resolve) => {
                                                                                                                   if (re.test(
                                                                                                                       value)) {
                                                                                                                       resolve()
                                                                                                                   } else if (!re.test(
                                                                                                                       value)) {
                                                                                                                       resolve(
                                                                                                                           'Eposta formatı uygun değil!')
                                                                                                                   } else {
                                                                                                                       resolve(
                                                                                                                           'Bu alan boş bırakılamaz!')
                                                                                                                   }
                                                                                                               })
                                                                                                       }
                                                                                                   })
                                                            if (email) {
                                                                const {value: website} = await Swal.fire({
                                                                                                             title: '3/4 Website',
                                                                                                             input: 'url',
                                                                                                             inputPlaceholder: 'Örn: www.google.com',
                                                                                                             inputValue: employer.website,
                                                                                                             showCancelButton: true,
                                                                                                             cancelButtonText: "Vazgeç",
                                                                                                             confirmButtonText: "Devam Et",
                                                                                                             allowOutsideClick: false,
                                                                                                             inputAttributes: {
                                                                                                                 maxlength: 100,
                                                                                                             },
                                                                                                             inputValidator: (value) => {
                                                                                                                 return new Promise(
                                                                                                                     (resolve) => {
                                                                                                                         if (value != '' && isURL(
                                                                                                                             value)) {
                                                                                                                             resolve()
                                                                                                                         } else {
                                                                                                                             resolve(
                                                                                                                                 'Website formatınız yanlış!!')
                                                                                                                         }
                                                                                                                     })
                                                                                                             }
                                                                                                         })

                                                                if (website) {
                                                                    const {value: phoneNumber} = await Swal.fire({
                                                                                                                     title: '4/4 Telefon Numarası',
                                                                                                                     input: 'text',
                                                                                                                     inputPlaceholder: 'Telefon numarası giriniz',
                                                                                                                     inputValue: employer.phoneNumber,
                                                                                                                     showCancelButton: true,
                                                                                                                     cancelButtonText: "Vazgeç",
                                                                                                                     confirmButtonText: "Kaydet",
                                                                                                                     allowOutsideClick: false,
                                                                                                                     inputAttributes: {
                                                                                                                         maxlength: 12
                                                                                                                     },

                                                                                                                     inputValidator: (value) => {
                                                                                                                         let re = /^[0-9]+$/
                                                                                                                         return new Promise(
                                                                                                                             (resolve) => {
                                                                                                                                 value = value.replace(
                                                                                                                                     /\s+/g,
                                                                                                                                     '')
                                                                                                                                 if (re.test(
                                                                                                                                     value)) {
                                                                                                                                     resolve()
                                                                                                                                 } else if (!re.test(
                                                                                                                                     value)) {
                                                                                                                                     resolve(
                                                                                                                                         'Telefon numarası harf içeremez!')
                                                                                                                                 } else {
                                                                                                                                     resolve(
                                                                                                                                         'Bu alan boş bırakılamaz!')
                                                                                                                                 }
                                                                                                                             })
                                                                                                                     }
                                                                                                                 })
                                                                    if (phoneNumber) {
                                                                        let empl = {
                                                                            companyName: companyName,
                                                                            email: email,
                                                                            id: employer.id,
                                                                            phoneNumber: phoneNumber,
                                                                            pictureUrl: employer.pictureUrl,
                                                                            website: website,
                                                                            password: employer.password
                                                                        }
                                                                        if (empl.companyName != employer.companyName || empl.email != employer.email || empl.phoneNumber != employer.phoneNumber || empl.website != employer.website) {
                                                                            setUpdatedEmployerInformation(empl)
                                                                            updateEmployer(empl)
                                                                            Swal.fire({
                                                                                          icon: 'info',
                                                                                          title: 'Yetkili onayından sonra bilgileriniz güncellenecektir!',
                                                                                          showConfirmButton: false,
                                                                                          timer: 9500
                                                                                      })

                                                                        } else {
                                                                            Swal.fire({
                                                                                          position: 'center',
                                                                                          icon: 'error',
                                                                                          // title: 'HATA',
                                                                                          text: 'Herhangi bir değişiklik yapılmadığı için işleminiz iptal edilmiştir!',
                                                                                          showConfirmButton: false,
                                                                                          timer: 3500
                                                                                      })
                                                                        }
                                                                    }
                                                                } else {
                                                                    Swal.fire({
                                                                                  position: 'center',
                                                                                  icon: 'info',
                                                                                  title: 'İşlemi iptal ettiniz!',
                                                                                  showConfirmButton: false,
                                                                                  timer: 1500
                                                                              })
                                                                }

                                                            } else {
                                                                Swal.fire({
                                                                              position: 'center',
                                                                              icon: 'info',
                                                                              title: 'İşlemi iptal ettiniz!',
                                                                              showConfirmButton: false,
                                                                              timer: 1500
                                                                          })
                                                            }
                                                        } else {
                                                            Swal.fire({
                                                                          position: 'center',
                                                                          icon: 'info',
                                                                          title: 'İşlemi iptal ettiniz!',
                                                                          showConfirmButton: false,
                                                                          timer: 1500
                                                                      })
                                                        }

                                                    }
                                                    }

                                                >
                                                    <i className={"fas fa-lg fa-user-edit"}></i> Düzenle
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-wrap mt-2"}>
                                <div
                                    className="w-full absolute lg:w-6/12 px-4 lg:order-3 mb-1 lg:text-right lg:self-center"
                                    style={{marginLeft: "56%"}}>
                                    <div className="py-2 px-2 sm:mt-0">

                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-12">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-black text-xs font-semibold font-bold mb-2"
                                        >
                                            Şirket Adı
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder={"E-Posta"}
                                            defaultValue={employer.companyName}
                                            style={{cursor: "default"}}
                                            readOnly={true}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-12">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-black text-xs font-semibold font-bold mb-2"
                                        >
                                            E-Posta
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder={"E-Posta"}
                                            defaultValue={employer.email}
                                            style={{cursor: "default"}}
                                            readOnly={true}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-12">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-black text-xs font-semibold font-bold mb-2"
                                        >
                                            Website
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder={"E-Posta"}
                                            defaultValue={employer.website}
                                            style={{cursor: "default"}}
                                            readOnly={true}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-12">
                                    <div className="relative w-full mb-6">
                                        <label
                                            className="block uppercase text-black text-xs font-semibold font-bold mb-2"
                                        >
                                            Telefon Numarası
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder={"E-Posta"}
                                            defaultValue={employer.phoneNumber}
                                            style={{cursor: "default"}}
                                            readOnly={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <div className={"bg-blueGray-200"}>
                <h3 className="text-4xl mb-2 font-semibold leading-normal text-blueGray-800 text-center"><i
                    className="fas fa-briefcase"></i> İlanlarım</h3>
                <div className="relative mb-2 lg:w-3/12 ml-auto mr-auto rounded">
                    <div style={{textAlign: "left", marginLeft: "-26.2rem"}}>
                        <AddJobAdvert/>
                    </div>
                    <span
                        className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
                    <input
                        type="text"
                        placeholder="Örn: Back-end developer..."
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-300 relative bg-blueGray-800 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}
                    />

                </div>

                <div
                    className={"relative flex flex-col min-w-0 break-words shadow-lg text-white rounded-lg bg-blueGray-800 mx-auto"}
                    style={{width: "70%", marginBottom: "7rem"}}
                >
                    <div className="block overflow-x-auto rounded-lg">
                        {/* Projects table */}
                        <table className="items-center w-full bg-transparent border-collapse rounded-lg">
                            <thead>
                            <tr>
                                <th
                                    className={
                                        "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >

                                </th>
                                <th
                                    className={
                                        "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Şirket
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Pozisyon
                                </th>
                                {/*<th*/}
                                {/*    className={*/}
                                {/*        "align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +*/}
                                {/*        (color === "light")*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    Açık Pozisyon*/}
                                {/*</th>*/}
                                {/*<th*/}
                                {/*    className={*/}
                                {/*        "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +*/}
                                {/*        (color === "light")*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    Açıklama*/}
                                {/*</th>*/}
                                <th
                                    className={
                                        "px-3 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Maaş (₺)
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Şehir
                                </th>
                                <th
                                    className={
                                        "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Yayın Tarihi
                                </th>
                                <th
                                    className={
                                        "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Son Başvuru Tarihi
                                </th>
                                <th
                                    className={
                                        "px-3 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Durum
                                </th>
                                <th
                                    className={
                                        "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Aktif
                                </th>
                                <th
                                    className={
                                        "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                ></th>
                            </tr>
                            </thead>
                            <tbody>
                            {jobAdverts.filter(value => {
                                if (setSearchTerm == '') {
                                    return value
                                } else if (value.employer.companyName.toLocaleLowerCase()
                                    .includes(searchTerm.toLocaleLowerCase()) || value.jobPosition.jobTitle.toLocaleLowerCase()
                                    .includes(searchTerm.toLocaleLowerCase()) || value.city.cityName.toLocaleLowerCase()
                                    .includes(searchTerm.toLocaleLowerCase())) {

                                    return value
                                }
                            }).map((jobAdvert, index) => (
                                <tr className={index % 2 == 0 ? "bg-blueGray-600 hover:bg-purple-250 font-semibold" : "bg-blueGray-800 hover:bg-indigo-250 font-semibold"}
                                    key={jobAdvert.id}>
                                    <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">{index + 1}</td>
                                    <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                        {jobAdvert.employer.companyName}
                                    </td>
                                    <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                        {jobAdvert.jobPosition.jobTitle}
                                    </td>
                                    {/*<td className="border-b border-indigo-400 lg:px-10 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
                                    {/*    {jobAdvert.positionCount}*/}
                                    {/*</td>*/}
                                    {/*<td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
                                    {/*    <div className="flex items-center">*/}
                                    {/*        <div className="relative w-full">*/}
                                    {/*            {jobAdvert.description}*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</td>*/}
                                    <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                        {jobAdvert.salary}(₺)
                                    </td>
                                    <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                        <div className="flex">
                                            {jobAdvert.city.cityName}
                                        </div>
                                    </td>
                                    <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                        <div className="flex">
                                        <span style={{display: "none"}}>{airdate = jobAdvert.airdate.toString().split(
                                            "T")}</span>
                                            {airdate[0]}
                                        </div>
                                    </td>
                                    <td className="border-b border-indigo-400 lg:px-10 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                        {jobAdvert.deadline}
                                    </td>
                                    <td className="border-b border-indigo-400 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                        {jobAdvert.confirmed ? <span style={{color: "#5edb5e"}}>Onaylandı</span> :
                                            <span style={{color: "#ffb300"}}>Onay Bekliyor</span>}
                                    </td>
                                    <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                        <input
                                            id="isActive"
                                            type="checkbox"
                                            defaultChecked={jobAdvert.active}
                                            className="form-checkbox cursor-pointer rounded-full ml-1 ease-linear transition-all duration-150 py-3"
                                            style={index % 2 == 1 ? {
                                                color: "#10B981",
                                                border: "2px solid #C2D0DD",
                                                width: 25,
                                                height: 25
                                            } : {
                                                color: "#cc6f16",
                                                border: "2px solid #C2D0DD",
                                                width: 25,
                                                height: 25
                                            }}
                                            onClick={() => jobAdvert.active ? employerService.deactiveJobAdvert(
                                                false,
                                                jobAdvert.id).then(() => {
                                                getJobAdverts()
                                            }) : employerService.deactiveJobAdvert(
                                                true,
                                                jobAdvert.id).then(() => {
                                                getJobAdverts()
                                            })}
                                        />
                                    </td>
                                    <td className="border-b border-indigo-400 align-middle border-l-0 border-r-0 whitespace-nowrap py-3">
                                        <JobAdvertDropdown deleteJobAdvert={() => deleteJobAdvert(jobAdvert.id)}/>
                                    </td>
                                </tr>

                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );


}

EmployerProfile.defaultProps = {
    color: "light",
};

EmployerProfile.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

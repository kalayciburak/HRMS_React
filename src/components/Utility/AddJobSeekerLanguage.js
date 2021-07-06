import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import CurriculaVaiteService from "../../services/CurriculaVaiteService";
import LangugageService from "../../services/LangugageService";
import JobSeekerLanguageService from "../../services/JobSeekerLanguageService";

function AddJobSeekerLanguage(props) {

    const curriculaVitaeService = new CurriculaVaiteService();

    const languageService = new LangugageService();

    const jobSeekerLanguageService = new JobSeekerLanguageService();

    const [cv, setCv] = useState([]);

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        let isMounted = true
        languageService.getLanguages().then((res) => {
            if (isMounted) {
                setLanguages(res.data.data)
            }
        })
        curriculaVitaeService.findCvByJobSeekerId(props.getJobSeekerLanguages()).then((res) => {
            if (isMounted) {
                setCv(res.data.data)
            }
        })

        return () => {
            isMounted = false;
        };
    }, []);

    function addjobSeekerLanguage(language) {
        return jobSeekerLanguageService.addJobSeekerLanguage(language).then(() => {
            props.getJobSeekerLanguages()
        })
    }

    let languageNames = languages.map((language, index) => (language.languageName))

    const degrees = [
        'Orta Altı Seviye',
        'Orta Seviye',
        'Orta Üstü Seviye',
        'İleri Seviye',
        'Profesyonel Seviye'
    ]

    return (
        <div>
            <span
                className="bg-indigo-500 cursor-pointer px-2 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-xs font-semibold capitalize px-1 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-250"
                onClick={async () => {
                    try {
                        const {value: languageName} = await Swal.fire({
                                                                          title: '1/2 Yabancı Dil Adı',
                                                                          input: 'select',
                                                                          inputOptions: {
                                                                              'Diller': languageNames
                                                                          },
                                                                          inputPlaceholder: 'Bir Dil seçiniz',
                                                                          showCancelButton: true,
                                                                          cancelButtonText: "Vazgeç",
                                                                          confirmButtonText: "Devam Et",
                                                                          allowOutsideClick: false,
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

                        if (languageName) {
                            const {value: languageDegree} = await Swal.fire({
                                                                                title: '2/2 Dil Derecesi',
                                                                                input: 'select',
                                                                                inputOptions: {
                                                                                    'Seviyeler': degrees
                                                                                },
                                                                                inputPlaceholder: 'Bir derece seçiniz',
                                                                                showCancelButton: true,
                                                                                cancelButtonText: "Vazgeç",
                                                                                confirmButtonText: "Kaydet",
                                                                                allowOutsideClick: false,
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
                            if (languageDegree) {
                                console.log(languageDegree)
                                let language = {
                                    curriculaVitaeId: cv.id,
                                    id: 0,
                                    languageDegree: Number(languageDegree) + 1,
                                    languageId: Number(languageName) + 1
                                }
                                addjobSeekerLanguage(language)
                                Swal.fire({
                                              icon: 'success',
                                              title: 'Yabancı Dil bilgisi başarıyla eklendi!',
                                              showConfirmButton: false,
                                              timer: 1500
                                          })
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

                    } catch (e) {
                        // console.log(e)
                        Swal.fire({
                                      icon: 'error',
                                      title: 'HATA',
                                      text: e,
                                      confirmButtonText: "Tamam"
                                  })
                    }
                }}

            >
                <i className={"fas fa-sm fa-plus"}></i> Ekle
            </span>
        </div>
    );
}

export default AddJobSeekerLanguage;

import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import CurriculaVaiteService from "../../services/CurriculaVaiteService";
import JobExperienceService from "../../services/JobExperienceService";

function AddJobExperiences(props) {

    const curriculaVitaeService = new CurriculaVaiteService();

    const jobExperienceService = new JobExperienceService();

    const [cv, setCv] = useState([]);

    let jobSeekerId = 1

    useEffect(() => {
        let isMounted = true
        curriculaVitaeService.findCvByJobSeekerId(jobSeekerId).then((res) => {
            if (isMounted) {
                setCv(res.data.data)
            }
        })

        return () => {
            isMounted = false;
        };
    }, []);


    function addJobExperience(jobExperience) {
        jobExperienceService.addJobExperience(jobExperience);
    }

    return (
        <div>
            <span
                className="bg-indigo-500 cursor-pointer px-2 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-xs font-semibold capitalize px-1 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-250"
                onClick={async () => {
                    try {
                        const {value: companyName} = await Swal.fire({
                                                                         title: '1/3 Şirket Adı',
                                                                         input: 'text',
                                                                         inputPlaceholder: 'Örn: Google',
                                                                         showCancelButton: true,
                                                                         cancelButtonText: "Vazgeç",
                                                                         confirmButtonText: "Devam Et",
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
                            const {value: positionName} = await Swal.fire({
                                                                              title: '2/3 Pozisyon Adı',
                                                                              input: 'text',
                                                                              inputPlaceholder: 'Örn: Software Developer',
                                                                              showCancelButton: true,
                                                                              cancelButtonText: "Vazgeç",
                                                                              confirmButtonText: "Devam Et",
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
                            if (positionName) {
                                // console.log(`Bölüm id: ${departmentName}`)
                                const {value: formValues} = await Swal.fire({
                                                                                html:
                                                                                    '<h1 style="margin-top:5%;font-size: 30px;font-family: Ubuntu;">3/3 Başlangıç Tarihi</h1><input type="date" id="swal-input1" class="swal2-input">' +
                                                                                    '<h1 style="margin-top:5%;font-size: 30px;font-family: Ubuntu;">Bitiş Tarihi</h1><input type="date" id="swal-input2" class="swal2-input">',
                                                                                focusConfirm: false,
                                                                                confirmButtonText: "Kaydet",
                                                                                allowOutsideClick: false,
                                                                                preConfirm: () => {
                                                                                    return [
                                                                                        document.getElementById(
                                                                                            'swal-input1').value,
                                                                                        document.getElementById(
                                                                                            'swal-input2').value
                                                                                    ]
                                                                                },
                                                                                inputValidator: (formValues) => {
                                                                                    return new Promise(
                                                                                        (resolve) => {
                                                                                            if (formValues[0] != '') {
                                                                                                resolve()
                                                                                            } else {
                                                                                                resolve(
                                                                                                    'Bu alan boş bırakılamaz!')
                                                                                            }
                                                                                        })
                                                                                }
                                                                            })
                                if (formValues[0]) {
                                    let jobExperience = {
                                        companyName: companyName,
                                        curriculaVitaeId: cv.id,
                                        endDate: formValues[1],
                                        id: 0,
                                        positionName: positionName,
                                        startDate: formValues[0]


                                    }
                                    addJobExperience(jobExperience)
                                    Swal.fire({
                                                  icon: 'success',
                                                  title: 'İş geçmişi başarıyla eklendi!',
                                                  showConfirmButton: false,
                                                  timer: 1500
                                              })

                                } else {
                                    Swal.fire({
                                                  icon: 'error',
                                                  title: 'HATA',
                                                  text: 'Sadece bitiş tarihi boş bırakılabilir!',
                                                  confirmButtonText: "Tamam"
                                              })

                                }
                            } else {
                                Swal.fire({
                                              position: 'top',
                                              icon: 'info',
                                              title: 'İşlemi iptal ettiniz!',
                                              showConfirmButton: false,
                                              timer: 1500
                                          })
                            }
                        } else {
                            Swal.fire({
                                          position: 'top',
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
                                      text: 'Sadece bitiş tarihi boş bırakılabilir!',
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

export default AddJobExperiences;

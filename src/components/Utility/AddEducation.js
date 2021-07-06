import React, {useEffect, useState} from 'react';
import SchoolService from "../../services/SchoolService";
import DepartmentService from "../../services/DepartmentService";
import EducationService from "../../services/EducationService";
import CurriculaVaiteService from "../../services/CurriculaVaiteService";
import Swal from "sweetalert2";

function AddEducation(props) {
    const [school, setSchool] = useState([]);

    const [department, setDepartment] = useState([]);

    const schoolService = new SchoolService();

    const departmentService = new DepartmentService();

    const educationService = new EducationService();

    const curriculaVitaeService = new CurriculaVaiteService();

    const [cv, setCv] = useState([]);

    useEffect(() => {
        let isMounted = true
        schoolService.getSchools().then((res) => {
            if (isMounted) {
                setSchool(res.data.data)
            }
        })
        departmentService.getDepartments().then((res) => {
            if (isMounted) {
                setDepartment(res.data.data)
            }
        })
        curriculaVitaeService.findCvByJobSeekerId(props.getEducations()).then((res) => {
            if (isMounted) {
                setCv(res.data.data)
            }
        })

        return () => {
            isMounted = false;
        };
    }, []);


    function addEducation(education) {
        educationService.addEducation(education).then(() => {
            props.getEducations()
        })
    }

    let schoolNames = school.map((sc, e) => (sc.schoolName))

    let departmentNames = department.map((dp, e) => (dp.departmentName))

    return (
        <div>
            <span
                className="bg-indigo-500 cursor-pointer px-2 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-xs font-semibold capitalize px-1 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-250"
                onClick={async () => {
                    try {
                        const {value: schoolName} = await Swal.fire({
                                                                        title: '1/3 Üniversite Adı',
                                                                        input: 'select',
                                                                        inputOptions: {
                                                                            'Üniversiteler': schoolNames
                                                                        },
                                                                        inputPlaceholder: 'Bir üniversite seçiniz',
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
                                                                                            'Seçim Yapmadınız!')
                                                                                    }
                                                                                })
                                                                        }
                                                                    })

                        if (schoolName) {
                            const {value: departmentName} = await Swal.fire({
                                                                                title: '2/3 Bölüm Adı',
                                                                                input: 'select',
                                                                                inputOptions: {
                                                                                    'Bölümler': departmentNames
                                                                                },
                                                                                inputPlaceholder: 'Bir bölüm seçiniz',
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
                                                                                                    'Seçim Yapmadınız!')
                                                                                            }
                                                                                        })
                                                                                }
                                                                            })
                            if (departmentName) {
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
                                                                                                    'Seçim Yapmadınız!')
                                                                                            }
                                                                                        })
                                                                                }
                                                                            })
                                if (formValues[0]) {
                                    let education = {
                                        curriculaVitaeId: cv.id,
                                        id: 0,
                                        startDate: formValues[0],
                                        endDate: formValues[1],
                                        schoolId: Number(schoolName) + 1,
                                        departmentId: Number(departmentName) + 1
                                    }
                                    addEducation(education)
                                    Swal.fire({
                                                  icon: 'success',
                                                  title: 'Eğitim bilgisi başarıyla eklendi!',
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
                        // console.log(departmentName + " " + schoolName)


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

export default AddEducation;

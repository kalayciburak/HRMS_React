import React, {useEffect, useState} from 'react';
import {Menu} from "@headlessui/react";
import Swal from "sweetalert2";
import SchoolService from "../../../services/SchoolService";
import DepartmentService from "../../../services/DepartmentService";
import EducationService from "../../../services/EducationService";
import CurriculaVaiteService from "../../../services/CurriculaVaiteService";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function EducationDelete(props) {

    const [school, setSchool] = useState([]);

    const [department, setDepartment] = useState([]);

    const schoolService = new SchoolService();

    const departmentService = new DepartmentService();

    const educationService = new EducationService();

    const curriculaVitaeService = new CurriculaVaiteService();

    const [cv, setCv] = useState([]);

    let jobSeekerId = 1

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
        curriculaVitaeService.findCvByJobSeekerId(jobSeekerId).then((res) => {
            if (isMounted) {
                setCv(res.data.data)
            }
        })

        return () => {
            isMounted = false;
        };
    }, []);

    let schoolNames = school.map((sc, e) => (sc.schoolName))

    let departmentNames = department.map((dp, e) => (dp.departmentName))

    return (
        <div>
            <Menu>
                {({open}) => (
                    <>
                        <div>
                            <Menu.Button
                                className="inline-flex justify-center w-full mb-2 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                <a
                                    onClick={() => {
                                        Swal.fire({
                                                      icon: 'warning',
                                                      title: 'Emin misiniz?',
                                                      showDenyButton: true,
                                                      // showCancelButton: true,
                                                      confirmButtonText: `Sil`,
                                                      denyButtonText: `Vazgeç`,
                                                      allowOutsideClick: false,
                                                  }).then((result) => {
                                            /* Read more about isConfirmed, isDenied below */
                                            if (result.isConfirmed) {
                                                props.deleteEducation()
                                                const Toast = Swal.mixin({
                                                                             toast: true,
                                                                             position: 'top-end',
                                                                             showConfirmButton: false,
                                                                             timer: 3000,
                                                                             timerProgressBar: true,
                                                                             background: "#3d6f42",
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
                                                               html: "<h1 style='font-family: Ubuntu;color: white;'>Başarıyla Kaldırıldı!</h1>"
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
                                >
                                    <i title={"Eğitimi Sil"} className="fas fa-lg fa-trash-alt hover:text-red-400"></i>
                                </a>
                            </Menu.Button>
                        </div>
                    </>
                )}
            </Menu>
        </div>
    );
}

export default EducationDelete;

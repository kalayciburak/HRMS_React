import React from 'react';
import {Menu} from "@headlessui/react";
import Swal from "sweetalert2";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function LanguageDelete(props) {
    return (
        <div>
            <Menu>
                {({open}) => (
                    <>
                        <div>
                            <Menu.Button
                                className="inline-flex justify-center w-full mt-2 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
                                                props.deleteJobSeekerLanguageById()
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
                                    <i title={"Yabancı Dili Sil"}
                                       className="fas fa-lg fa-trash-alt hover:text-red-400"></i>
                                </a>
                            </Menu.Button>
                        </div>
                    </>
                )}
            </Menu>
        </div>
    );
}

export default LanguageDelete;

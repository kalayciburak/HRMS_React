/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import Swal from "sweetalert2";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function EmployerDropdown(props) {
    return (
        <Menu>
            {({open}) => (
                <>
                    <div>
                        <Menu.Button
                            className="inline-flex justify-center w-full mb-2 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            <a
                                className="text-white px-3 text-lg"
                            >
                                <i className="fas fa-ellipsis-h"></i>
                            </a>
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="absolute bg-blueGray-700 right-0 text-base  float-left list-none rounded shadow-lg min-w-48 mr-2"
                            style={{marginTop: -10, textAlign: "center", border: "solid 1px #F1F5F9"}}
                        >
                            <div>
                                <Menu.Item>
                                    {({active}) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-emerald-500 text-white' : 'text-white',
                                                'block px-4 py-3 text-sm'
                                            )}
                                        >
                                            <i className="fas fa-edit"></i> Düzenle
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item style={{borderTop: "solid 1px #F1F5F9"}}>
                                    {({active}) => (
                                        <a
                                            className={classNames(
                                                active ? 'bg-red-500 text-white' : 'text-white',
                                                "text-sm py-3 px-4 block w-full cursor-pointer whitespace-nowrap bg-transparent text-center text-white")
                                            }
                                            onClick={() => {
                                                Swal.fire({
                                                              icon: 'warning',
                                                              title: 'Emin misiniz?',
                                                              showDenyButton: true,
                                                              // showCancelButton: true,
                                                              confirmButtonText: `Sil`,
                                                              denyButtonText: `Vazgeç`,
                                                          }).then((result) => {
                                                    /* Read more about isConfirmed, isDenied below */
                                                    if (result.isConfirmed) {
                                                        props.deleteEmployer()
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
                                                                       html: "<h1 style='font-family: Ubuntu;color: white;'>Başarıyla Kaldırıldı!</h1>"
                                                                   })
                                                    } else if (result.isDenied) {
                                                        // Swal.fire('Changes are not saved', '', 'info')
                                                    }
                                                })
                                            }}
                                        >
                                            <i className="fas fa-trash"></i> Sil
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

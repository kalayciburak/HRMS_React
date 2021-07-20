/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {Link} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HomeDropdown(props) {
    return (
        <Menu>
            {({open}) => (
                <>
                    <div className="items-center flex">
                        <Menu.Button
                            className="inline-flex justify-center hover:text-lightBlue-600 w-full rounded-md shadow-sm text-sm font-semibold text-blueGray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            <i className={"fas fa-lg fa-bars mr-2 mt-1"}></i>Menü
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
                            className="absolute bg-blueGray-700 text-base  float-left list-none rounded shadow-lg mr-2"
                            style={{textAlign: "center", border: "solid 1px #F1F5F9", marginTop: 120, marginLeft: -1}}
                        >
                            <div className={"text-left"}>
                                <Menu.Item style={{borderTop: "solid 1px #F1F5F9"}}>
                                    {({active}) => (
                                        <Link
                                            to="#" //eklenecek

                                            className={classNames(
                                                active ? 'bg-red-500 text-white' : 'text-white',
                                                'block px-4 py-3 text-sm'
                                            )}
                                        >
                                            <i className="fas fa-sign-out-alt mr-2"></i> Çıkış Yap
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item style={{borderTop: "solid 1px #F1F5F9"}}>
                                    {({active}) => (
                                        <Link
                                            to="/admin/systemPersonelList"

                                            className={classNames(
                                                active ? 'bg-indigo-500 text-white' : 'text-white',
                                                'block px-4 py-3 text-sm'
                                            )}
                                        >
                                            <i className="fas fa-lock mr-2"></i> Admin Paneli
                                        </Link>
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

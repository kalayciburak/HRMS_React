import React from "react";
import {Link} from "react-router-dom";
import {createPopper} from "@popperjs/core";

const HomeDropdown = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <a
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <i className="fas fa-lg fa-bars mr-2"></i>Menü
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
            >
           <span
               className={
                   "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
               }
           >
          İşlemler
        </span>
                <Link
                    to="/profile"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                    Profil
                </Link>
                <Link
                    to="/jobAdvert"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                    Çıkış Yap
                </Link>
                <span
                    className={
                        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
                    }
                >
          Admin Paneli
        </span>
                <Link
                    to="/admin/systemPersonelList"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                    Sistem Personelleri
                </Link>
                <Link
                    to="/admin/jobseekerList"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                    İş Arayanlar
                </Link>
                <Link
                    to="/admin/employerList"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                    İş Verenler
                </Link>
                <Link
                    to="/admin/jobAdvertList"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                    İş ilanları
                </Link>
                <Link
                    to="/admin/settings"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                    Ayarlar
                </Link>
            </div>
        </>
    );
};

export default HomeDropdown;

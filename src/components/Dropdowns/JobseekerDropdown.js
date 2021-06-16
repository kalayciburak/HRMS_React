import React from "react";
import {createPopper} from "@popperjs/core";
import Swal from "sweetalert2";

const JobseekerDropdown = (props) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "left-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <a
                className="text-white py-1 px-3 text-lg"
                href="#"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <i className="fas fa-ellipsis-h"></i>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-blueGray-800 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                } style={{border: "solid 1px #F1F5F9"}}
            >
                <a
                    href="#"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap text-center bg-transparent text-white"
                    }
                    onClick={(e) => {
                        e.preventDefault()
                        closeDropdownPopover();
                    }}
                >
                    <i className="fas fa-edit"></i> Düzenle
                </a>
                <div className="h-0 my-2 border border-solid border-blueGray-100"/>
                <a
                    className={
                        "text-sm py-2 px-4 block w-full cursor-pointer whitespace-nowrap bg-transparent text-center text-white"
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
                                Swal.fire('Başarıyla Kaldırıldı!', '', 'success')
                                props.deleteJobseeker()
                            } else if (result.isDenied) {
                                // Swal.fire('Changes are not saved', '', 'info')
                            }
                        })
                        closeDropdownPopover();
                    }}
                >
                    <i className="fas fa-trash"></i> Sil
                </a>
            </div>

        </>
    );
};

export default JobseekerDropdown;

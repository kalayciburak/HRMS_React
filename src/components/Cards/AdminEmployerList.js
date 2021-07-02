import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

// components
import EmployerDropdown from "components/Dropdowns/EmployerDroıpdown.js";
import EmployerService from "../../services/EmployerService";

export default function AdminEmployerList({color}) {

    const employerService = new EmployerService();

    const [employers, setEmployers] = useState([]);

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        let isMounted = true
        employerService.getEmployers().then(result => {
            if (isMounted) setEmployers(result.data.data)
        })
        return () => {
            isMounted = false
        }
    }, [employers])

    function deleteEmployer(id) {
        employerService.deleteEmployerById(id);
    }

    return (

        <>
            <h3 className="text-4xl mb-2 font-semibold leading-normal text-blueGray-600  text-center"><i
                className="fas fa-building"></i> Şirketler</h3>
            <div className="relative mb-2 lg:w-3/12 ml-auto mr-auto rounded">
              <span
                  className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
                <input
                    type="text"
                    placeholder="Örn: Google..."
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-300 relative bg-blueGray-800 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                />
            </div>
            <div
                className={"relative flex flex-col min-w-0 break-words mx-auto w-full mb-6 shadow-lg text-white rounded-lg bg-blueGray-800"}
                style={{width: "60%"}}>
                <div className="block overflow-x-auto rounded-lg ">
                    {/* Projects table */}
                    <table
                        className="items-center w-full mx-auto bg-transparent border-collapse tr-even:bg-red-200 rounded-lg">
                        <thead>
                        <tr>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                Şirket
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                E-Posta
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                Website
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                Telefon No
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            ></th>
                        </tr>
                        </thead>
                        <tbody>
                        {employers.filter(value => {
                            if (setSearchTerm == '') {
                                return value
                            } else if (value.companyName.toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())) {

                                return value
                            }
                        }).map((employer, index) => (
                            <tr className={index % 2 == 0 ? "bg-lightBlue-600 font-semibold" : "bg-blueGray-800 font-semibold"}
                                key={employer.id}>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    {employer.companyName}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    {employer.email}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    {employer.website}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    {employer.phoneNumber}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    <EmployerDropdown deleteEmployer={() => deleteEmployer(employer.id)}/>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );


}

AdminEmployerList.defaultProps = {
    color: "light",
};

AdminEmployerList.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};


import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

// components
import EmployerDropdown from "components/Dropdowns/EmployerDroıpdown.js";
import EmployerService from "../../services/EmployerService";

export default function AdminEmployerList({color}) {

    const employerService = new EmployerService();

    const [employers, setEmployers] = useState([]);

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
            <div
                className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg text-white rounded-lg bg-blueGray-800"}
                style={{width: "50%", marginLeft: "25%"}}>
                <div className="block overflow-x-auto rounded-lg ">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse tr-even:bg-red-200 rounded-lg">
                        <thead>
                        <tr>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                Şirket
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                Website
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                Telefon No
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            ></th>
                        </tr>
                        </thead>
                        <tbody>
                        {employers.map((employer, index) => (
                            <tr className={index % 2 == 0 ? "bg-lightBlue-600" : "bg-blueGray-800"} key={employer.id}>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {employer.companyName}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {employer.website}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {employer.phoneNumber}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
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


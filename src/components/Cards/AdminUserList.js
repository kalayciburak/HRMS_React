import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

// components
import UserTableDropdown from "components/Dropdowns/UserTableDropdown.js";
import EmployerService from "../../services/EmployerService";
import JobSeekerService from "../../services/JobSeekerService";
import SystemPersonelService from "../../services/SystemPersonelService";

export default function AdminUserList({color}) {
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    })

    const [jobSeekers, setJobSeekers] = useState([]);

    useEffect(() => {
        let jobSeekerService = new JobSeekerService();
        jobSeekerService.getJobSeekers().then(result => setJobSeekers(result.data.data))
    })

    const [systemPersonels, setSystemPersonels] = useState([]);

    useEffect(() => {
        let systemPersonelService = new SystemPersonelService();
        systemPersonelService.getSystemPersonel().then(result => setSystemPersonels(result.data.data))
    })

    return (

        <>
            <h3 className="text-4xl mb-2 font-semibold leading-normal text-blueGray-600  text-center"><i
                className="fas fa-user-cog"></i> Sistem Personelleri</h3>
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
                                Kullanıcı Adı
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
                        {systemPersonels.map((systemPersonel, index) => (
                            <tr className={index % 2 == 0 ? "bg-lightBlue-600" : "bg-blueGray-800"}>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {systemPersonel.username}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    <UserTableDropdown/>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <h3 className="text-4xl mb-2 font-semibold leading-normal text-blueGray-600  text-center"><i
                className="fas fa-user"></i> İş Arayanlar</h3>
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
                                Ad
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                Soyad
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                Tc No
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                    (color === "light")
                                }
                            >
                                Doğum Tarihi
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
                        {jobSeekers.map((jobseeker, index) => (
                            <tr className={index % 2 == 0 ? "bg-lightBlue-600" : "bg-blueGray-800"}>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {jobseeker.firstName}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {jobseeker.lastName}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {jobseeker.identityNumber}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {jobseeker.birthDate}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    <UserTableDropdown/>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

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
                            <tr className={index % 2 == 0 ? "bg-lightBlue-600" : "bg-blueGray-800"}>
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
                                    <UserTableDropdown/>
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

AdminUserList.defaultProps = {
    color: "light",
};

AdminUserList.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};


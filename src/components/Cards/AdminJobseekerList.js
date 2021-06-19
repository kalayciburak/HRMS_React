import React, {useEffect, useState} from 'react';
import JobSeekerService from "../../services/JobSeekerService";
import HeadleeDropdown from "../Dropdowns/JobseekerDropdown"
import PropTypes from "prop-types";

function AdminJobseekerList(props) {

    let jobSeekerService = new JobSeekerService();

    const [jobSeekers, setJobSeekers] = useState([])

    useEffect(() => {
        jobSeekerService.getJobSeekers().then(result => setJobSeekers(result.data.data))
    })

    function deleteJobseeker(id) {
        jobSeekerService.deleteJobSeekerById(id);
    }

    return (
        <div>
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
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Ad
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Soyad
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Tc No
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Doğum Tarihi
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            ></th>
                        </tr>
                        </thead>
                        <tbody>
                        {jobSeekers.map((jobseeker, index) => (
                            <tr className={index % 2 == 0 ? "bg-lightBlue-600" : "bg-blueGray-800"} key={jobseeker.id}>
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
                                    <HeadleeDropdown deleteJobseeker={() => deleteJobseeker(jobseeker.id)}/>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

AdminJobseekerList.defaultProps = {
    color: "light",
};

AdminJobseekerList.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

export default AdminJobseekerList;




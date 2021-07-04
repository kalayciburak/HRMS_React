import React, {useEffect, useState} from 'react';
import JobSeekerService from "../../services/JobSeekerService";
import JobseekerDropdown from "../Dropdowns/JobseekerDropdown"
import PropTypes from "prop-types";

function AdminJobseekerList(props) {

    const jobSeekerService = new JobSeekerService();

    const [searchTerm, setSearchTerm] = useState('')

    const [jobSeekers, setJobSeekers] = useState([])

    useEffect(() => {
        let isMounted = true
        jobSeekerService.getJobSeekers().then((result) => {
            if (isMounted) setJobSeekers(result.data.data)
        })
        return () => {
            isMounted = false
        }

    }, [])

    function deleteJobseeker(id) {
        jobSeekerService.deleteJobSeekerById(id);
        const filteredJobSeeker = jobSeekers.filter((jobSeeker) => jobSeeker.id != id)
        setJobSeekers(filteredJobSeeker)
    }

    return (
        <div>
            <h3 className="text-4xl mb-2 font-semibold leading-normal text-blueGray-600  text-center"><i
                className="fas fa-user"></i> İş Arayanlar</h3>
            <div className="relative mb-2 lg:w-3/12 ml-auto mr-auto rounded">
              <span
                  className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
                <input
                    type="text"
                    placeholder="Örn: Ad Soyad..."
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-300 relative bg-blueGray-800 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                />
            </div>
            <div
                className={"relative flex mx-auto flex-col min-w-0 break-words w-full mb-6 shadow-lg text-white rounded-lg bg-blueGray-800"}
                style={{width: "55%"}}>
                <div className="block overflow-x-auto rounded-lg ">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse tr-even:bg-red-200 rounded-lg">
                        <thead>
                        <tr>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Ad
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Soyad
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                E-Posta
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Tc No
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Doğum Tarihi
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            ></th>
                        </tr>
                        </thead>
                        <tbody>
                        {jobSeekers.filter(value => {
                            if (setSearchTerm == '') {
                                return value
                            } else if (value.firstName.toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase()) || value.lastName.toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase()) || value.birthDate.toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())) {

                                return value
                            }
                        }).map((jobseeker, index) => (
                            <tr className={index % 2 == 0 ? "bg-lightBlue-600 font-semibold" : "bg-blueGray-800 font-semibold"}
                                key={jobseeker.id}>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    {jobseeker.firstName}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    {jobseeker.lastName}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    {jobseeker.email}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    {jobseeker.identityNumber}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    {jobseeker.birthDate}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                                    <JobseekerDropdown deleteJobseeker={() => deleteJobseeker(jobseeker.id)}/>
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




import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

// components
import JobAdvertDropdown from "components/Dropdowns/jobAdvertDropdown.js";
import JobAdvertService from "../../services/JobAdvertService";
import EmployerService from "../../services/EmployerService";
import SystemPersonelService from "../../services/SystemPersonelService";

export default function AdminJobAdvertList() {

    const jobAdvertService = new JobAdvertService();

    const employerService = new EmployerService();

    const systemPersonelService = new SystemPersonelService();

    const [jobAdverts, setJobAdverts] = useState([]);

    const [confirmed, setConfirmed] = useState(true);

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {

        let isMounted = true;
        jobAdvertService.getSortedJobAdverts().then((result) => {
            if (isMounted) return setJobAdverts(result.data.data)
        });

        return () => {
            isMounted = false
        }
    }, []);

    let airdate;

    function deleteJobAdvert(id) {
        jobAdvertService.deleteJobAdvertById(id).then(() => {
            getJobAdverts()
        })
        // const filteredJobAdverts = jobAdverts.filter((jobAdvert) => jobAdvert.id != id)
        // setJobAdverts(filteredJobAdverts)
    }

    function getJobAdverts() {
        jobAdvertService.getSortedJobAdverts().then((res) => {
            setJobAdverts(res.data.data)
        })
    }

    return (

        <>
            <h3 className="text-4xl mb-2 font-semibold leading-normal text-blueGray-800 text-center"><i
                className="fas fa-briefcase"></i> İş İlanları</h3>
            <div className="relative mb-2 lg:w-3/12 ml-auto mr-auto rounded">
              <span
                  className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
                <input
                    type="text"
                    placeholder="Örn: Back-end developer..."
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-300 relative bg-blueGray-800 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                />
            </div>

            <div
                className={"relative flex flex-col min-w-0 break-words shadow-lg text-white rounded-lg bg-blueGray-800"}
            >
                <div className="block overflow-x-auto rounded-lg">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse rounded-lg">
                        <thead>
                        <tr>
                            <th
                                className={
                                    "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                }
                            >

                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                }
                            >
                                Şirket
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                }
                            >
                                Pozisyon
                            </th>
                            {/*<th*/}
                            {/*    className={*/}
                            {/*        "align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +*/}
                            {/*        (color === "light")*/}
                            {/*    }*/}
                            {/*>*/}
                            {/*    Açık Pozisyon*/}
                            {/*</th>*/}
                            {/*<th*/}
                            {/*    className={*/}
                            {/*        "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +*/}
                            {/*        (color === "light")*/}
                            {/*    }*/}
                            {/*>*/}
                            {/*    Açıklama*/}
                            {/*</th>*/}
                            <th
                                className={
                                    "px-3 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                }
                            >
                                Maaş (₺)
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                }
                            >
                                Şehir
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                }
                            >
                                Yayın Tarihi
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                }
                            >
                                Son Başvuru Tarihi
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                }
                            >
                                Aktif/Onaylı
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                }
                            ></th>
                        </tr>
                        </thead>
                        <tbody>
                        {jobAdverts.filter(value => {
                            if (setSearchTerm == '') {
                                return value
                            } else if (value.employer.companyName.toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase()) || value.jobPosition.jobTitle.toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase()) || value.city.cityName.toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())) {

                                return value
                            }
                        }).map((jobAdvert, index) => (
                            <tr className={index % 2 == 0 ? "bg-blueGray-600 hover:bg-purple-250 font-semibold" : "bg-blueGray-800 hover:bg-indigo-250 font-semibold"}
                                key={jobAdvert.id}>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">{index + 1}</td>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                    {jobAdvert.employer.companyName}
                                </td>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                    {jobAdvert.jobPosition.jobTitle}
                                </td>
                                {/*<td className="border-b border-indigo-400 lg:px-10 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
                                {/*    {jobAdvert.positionCount}*/}
                                {/*</td>*/}
                                {/*<td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
                                {/*    <div className="flex items-center">*/}
                                {/*        <div className="relative w-full">*/}
                                {/*            {jobAdvert.description}*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</td>*/}
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                    {jobAdvert.salary}(₺)
                                </td>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                    <div className="flex">
                                        {jobAdvert.city.cityName}
                                    </div>
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                    <div className="flex">
                                        <span style={{display: "none"}}>{airdate = jobAdvert.airdate.toString().split(
                                            "T")}</span>
                                        {airdate[0]}
                                    </div>
                                </td>
                                <td className="border-b border-indigo-400 lg:px-10 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                    {jobAdvert.deadline}
                                </td>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3">
                                    <input
                                        id="isActive"
                                        type="checkbox"
                                        defaultChecked={jobAdvert.active}
                                        className="form-checkbox cursor-pointer rounded-full ml-1 mr-2 ease-linear transition-all duration-150 py-3"
                                        style={index % 2 == 1 ? {
                                            color: "#10B981",
                                            border: "2px solid #C2D0DD",
                                            width: 25,
                                            height: 25
                                        } : {color: "#cc6f16", border: "2px solid #C2D0DD", width: 25, height: 25}}
                                        onClick={() => jobAdvert.active ? employerService.deactiveJobAdvert(
                                            false,
                                            jobAdvert.id).then(() => {
                                            getJobAdverts()
                                        }) : employerService.deactiveJobAdvert(
                                            true,
                                            jobAdvert.id).then(() => {
                                            getJobAdverts()
                                        })}
                                    />
                                    |
                                    <input
                                        id="isConfirmed"
                                        type="checkbox"
                                        defaultChecked={jobAdvert.confirmed}
                                        className="form-checkbox cursor-pointer border-0 rounded-full text-red-500 ml-2 w-5 h-5 ease-linear transition-all duration-150 py-3"
                                        style={index % 2 == 1 ? {
                                            color: "#10B981",
                                            border: "2px solid #C2D0DD",
                                            width: 25,
                                            height: 25
                                        } : {color: "#cc6f16", border: "2px solid #C2D0DD", width: 25, height: 25}}
                                        onClick={() => jobAdvert.confirmed ? systemPersonelService.approveJobAdvert(
                                            false,
                                            jobAdvert.id).then(() => {
                                            getJobAdverts()
                                        }) : systemPersonelService.approveJobAdvert(true, jobAdvert.id).then(() => {
                                            getJobAdverts()
                                        })}
                                    />
                                </td>
                                <td className="border-b border-indigo-400 align-middle border-l-0 border-r-0 whitespace-nowrap py-3">
                                    <JobAdvertDropdown deleteJobAdvert={() => deleteJobAdvert(jobAdvert.id)}/>
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

AdminJobAdvertList.defaultProps = {
    color: "light",
};

AdminJobAdvertList.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

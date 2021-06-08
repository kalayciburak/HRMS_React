import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import JobAdvertService from "../../services/JobAdvertService";

export default function CardTable({color}) {
    const [jobAdverts, setJobAdverts] = useState([]);

    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
    })

    let airdate;

    {
        jobAdverts.map((jobAdvert) => {
            <span style={{visibility: "hidden"}}>{airdate = jobAdvert.airdate.toString().split("T")}</span>
        })
    }

    return (

        <>
            <h3 className="text-4xl mb-2 font-semibold leading-normal text-blueGray-600  text-center"><i
                className="fas fa-briefcase"></i> İş İlanları</h3>
            <div
                className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg text-white rounded-lg bg-blueGray-800"}
                style={{width: "78%", marginLeft: "10%"}}>
                <div className="block overflow-x-auto rounded-lg">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse tr-even:bg-red-200 rounded-lg">
                        <thead>
                        <tr>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Şirket
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Pozisyon
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Açık Pozisyon
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Açıklama
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Maaş (₺)
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Şehir
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Yayın Tarihi
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Son Başvuru Tarihi
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            ></th>
                        </tr>
                        </thead>
                        <tbody>
                        {jobAdverts.map((jobAdvert, index) => (
                            <tr className={index % 2 == 0 ? "bg-lightBlue-600" : "bg-blueGray-800"}>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {jobAdvert.employer.companyName}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {jobAdvert.jobPosition.jobTitle}
                                </td>
                                <td className="border-b border-indigo-400 px-12 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {jobAdvert.positionCount}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <div className="relative w-full">
                                            {jobAdvert.description}
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {jobAdvert.salary}(₺)
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        {jobAdvert.city.cityName}
                                    </div>
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        {airdate[0]}
                                    </div>
                                </td>
                                <td className="border-b border-indigo-400 px-12 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {jobAdvert.deadline}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <TableDropdown/>
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

CardTable.defaultProps = {
    color: "light",
};

CardTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

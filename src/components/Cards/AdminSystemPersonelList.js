import React, {useEffect, useState} from 'react';
import SystemPersonelDropdown from "../Dropdowns/SystemPersonelDropdown";
import SystemPersonelService from "../../services/SystemPersonelService";

function AdminSystemPersonelList(props) {

    let systemPersonelService = new SystemPersonelService();

    const [systemPersonels, setSystemPersonels] = useState([]);

    useEffect(() => {
        systemPersonelService.getSystemPersonel().then(result => setSystemPersonels(result.data.data))
    })

    function deleteSystemPersonel(id) {
        systemPersonelService.deleteSystemPersonelById(id);
    }

    return (
        <div>
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
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Kullanıcı Adı
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
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
                                    <SystemPersonelDropdown
                                        deleteSystemPersonel={() => deleteSystemPersonel(systemPersonel.id)}/>
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

export default AdminSystemPersonelList;

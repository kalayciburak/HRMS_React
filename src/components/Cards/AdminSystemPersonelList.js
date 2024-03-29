import React, {useEffect, useState} from 'react';
import SystemPersonelDropdown from "../Dropdowns/SystemPersonelDropdown";
import SystemPersonelService from "../../services/SystemPersonelService";
import AddSystemPersonel from "../Modals/AddSystemPersonel";
import EmployerUpdateService from "../../services/EmployerUpdateService";
import EmployerService from "../../services/EmployerService";

function AdminSystemPersonelList(props) {

    const systemPersonelService = new SystemPersonelService();

    const employerUpdateService = new EmployerUpdateService();

    const employerService = new EmployerService();

    const [searchTerm, setSearchTerm] = useState('')

    const [systemPersonels, setSystemPersonels] = useState([]);

    const [updatedEmployers, setUpdatedEmployers] = useState([]);

    const [employerUpdate, setEmployerUpdate] = useState([]);

    useEffect(() => {
        let isMounted = true
        systemPersonelService.getSystemPersonel().then(result => {
            if (isMounted) setSystemPersonels(result.data.data)
        })
        systemPersonelService.getEmployerByUpdatedTrue().then((res) => {
            if (isMounted) setUpdatedEmployers(res.data.data)
        })
        return () => {
            isMounted = false
        }
    }, [])

    function deleteSystemPersonel(id) {
        systemPersonelService.deleteSystemPersonelById(id).then(() => {
            getPersonels()
        })
        // const filteredSystemPersonels = systemPersonels.filter((systemPersonel) => systemPersonel.id != id)
        // setSystemPersonels(filteredSystemPersonels);
    }

    function getPersonels() {
        systemPersonelService.getSystemPersonel().then((res) => {
            setSystemPersonels(res.data.data);
        })
    }

    function getEmployers() {
        systemPersonelService.getEmployerByUpdatedTrue().then((res) => {
            setUpdatedEmployers(res.data.data)
        })
    }


    return (
        <div>

            <h3 className="text-4xl mb-2 font-semibold leading-normal text-blueGray-600  text-center"><i
                className="fas fa-user-cog"></i> Sistem Personelleri</h3>
            <div className="relative mb-2 lg:w-3/12 ml-auto mr-auto rounded">
              <span
                  className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
                <input
                    type="text"
                    placeholder="Örn: Kullanıcı adı..."
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-300 relative bg-blueGray-800 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                />
            </div>
            <div style={{textAlign: "left"}}>
                <AddSystemPersonel getPersonels={() => getPersonels()}/>
            </div>
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
                                    "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                Kullanıcı Adı
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            >
                                E-Posta
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-indigo-400 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                }
                            ></th>
                        </tr>
                        </thead>
                        <tbody>
                        {systemPersonels.filter(value => {
                            if (setSearchTerm == '') {
                                return value
                            } else if (value.username.toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())) {

                                return value
                            }
                        }).map((systemPersonel, index) => (
                            <tr className={index % 2 == 0 ? "bg-blueGray-600 hover:bg-purple-250 font-semibold" : "bg-blueGray-800 hover:bg-indigo-250  font-semibold"}
                                key={systemPersonel.id}>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3 text-center">
                                    {systemPersonel.username}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3 text-center">
                                    {systemPersonel.email}
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-3 text-center">
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

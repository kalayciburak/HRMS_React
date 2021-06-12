import React, {useState} from "react";
import EmployerRegister from "./EmployerRegister";
import JobseekerRegister from "./JobseekerRegister";


export default function Register() {
    const [active, setActive] = useState(true);

    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full md:w-5/12 px-4">

                        <div
                            className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-600 border-0"
                            style={{marginTop: -40}}
                        >
                            <div className={"inline-flex"}>
                                <button
                                    className={(active ? "bg-indigo-500 " : "bg-blueGray-600 ") + "float-left bg-indigo-500 text-blueGray-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-1/2 ease-linear transition-all duration-150"}
                                    type="button"
                                    onClick={() => setActive(true)}
                                >
                                    İş Arayan
                                </button>
                                <button
                                    className={(active ? "bg-blueGray-600" : "bg-indigo-500 ") + "float-right text-blueGray-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-1/2 ease-linear transition-all duration-150"}
                                    type="button"
                                    onClick={() => setActive(false)}
                                >
                                    iş Veren
                                </button>

                            </div>
                            {active ? <JobseekerRegister/> : <EmployerRegister/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

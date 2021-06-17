import React, {useState} from "react";
import EmployerRegister from "./EmployerRegister";
import JobseekerRegister from "./JobseekerRegister";


export default function Register() {

    const [isJobseeker, setJobseeker] = useState(true);

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
                                    className={(isJobseeker ? "bg-indigo-500 " : "bg-blueGray-600 ") + "float-left bg-indigo-500 text-blueGray-300 text-sm font-bold uppercase px-6 py-3 rounded outline-none focus:outline-none w-1/2 ease-linear transition-all duration-150"}
                                    type="button"
                                    onClick={() => setJobseeker(true)}
                                >
                                    İş Arayan
                                </button>
                                <button
                                    className={(isJobseeker ? "bg-blueGray-600" : "bg-indigo-500 ") + "float-right text-blueGray-300 text-sm font-bold uppercase px-6 py-3 rounded outline-none focus:outline-none w-1/2 ease-linear transition-all duration-150"}
                                    type="button"
                                    onClick={() => setJobseeker(false)}
                                >
                                    iş Veren
                                </button>

                            </div>
                            {isJobseeker ? <JobseekerRegister/> : <EmployerRegister/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

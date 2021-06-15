import React from "react";

// components
import AdminEmployerList from "../../components/Cards/AdminEmployerList";

export default function EmployerList() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full mb-4 mt-6 px-4">
                    <AdminEmployerList color="dark"/>
                </div>
            </div>
        </>
    );
}

import React from "react";
import AdminJobseekerList from "../../components/Cards/AdminJobseekerList";

// components

export default function jobseekerList() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full mb-4 mt-6 px-4">
                    <AdminJobseekerList/>
                </div>
            </div>
        </>
    );
}

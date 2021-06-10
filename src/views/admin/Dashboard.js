import React from "react";

// components
import AdminUserList from "../../components/Cards/AdminUserList";

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full mb-4 mt-6 px-4">
                    <AdminUserList color="dark"/>
                </div>
            </div>
        </>
    );
}

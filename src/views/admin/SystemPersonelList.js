import React from "react";
import AdminSystemPersonelList from "../../components/Cards/AdminSystemPersonelList";

// components

export default function systemPersonelList() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full mb-4 mt-6 px-4">
                    <AdminSystemPersonelList color="dark"/>
                </div>
            </div>
        </>
    );
}

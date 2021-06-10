import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import jobAdvertList from "views/admin/JobAdvertList.js";

export default function Admin() {
    return (
        <>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar/>
                {/* Header */}
                {/*<HeaderStats />*/}
                <div className="px-4 md:px-10 mx-auto w-full -m-24 mt-6">
                    <Switch>
                        <Route path="/admin/dashboard" exact component={Dashboard}/>
                        <Route path="/admin/settings" exact component={Settings}/>
                        <Route path="/admin/jobAdvertList" exact component={jobAdvertList}/>
                        <Redirect from="/admin" to="/admin/dashboard"/>
                    </Switch>
                    <FooterAdmin/>
                </div>
            </div>
        </>
    );
}

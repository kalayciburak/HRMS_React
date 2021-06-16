import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import EmployerList from "views/admin/EmployerList.js";
import Settings from "views/admin/Settings.js";
import jobAdvertList from "views/admin/JobAdvertList.js";
import jobseekerList from "../views/admin/JobseekerList";
import systemPersonelList from "../views/admin/SystemPersonelList";

export default function Admin() {
    return (
        <>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar/>
                {/* Header */}
                {/*<HeaderStats />*/}
                <div className="px-4 md:px-10 mx-auto w-full">
                    <Switch>
                        <Route path="/admin/systemPersonelList" exact component={systemPersonelList}/>
                        <Route path="/admin/jobseekerList" exact component={jobseekerList}/>
                        <Route path="/admin/employerList" exact component={EmployerList}/>
                        <Route path="/admin/settings" exact component={Settings}/>
                        <Route path="/admin/jobAdvertList" exact component={jobAdvertList}/>
                        <Redirect from="/admin" to="/admin/employerList"/>
                    </Switch>
                    <FooterAdmin/>
                </div>
            </div>
        </>
    );
}

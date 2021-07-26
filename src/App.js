import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import JobSeekerProfile from "./views/jobseeker/JobSeekerProfile";
import Index from "./views/Index";
import Home from "./views/Home";
import "tailwindcss/tailwind.css"
import AddCurriculaVitae from "./views/jobseeker/AddCurriculaVitae";
import EmployerProfile from "./views/employer/EmployerProfile";
import {Provider} from "react-redux";
import {configureStore} from "./store/configureStore";

const store = configureStore()

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {/* add routes with layouts */}
                    <Route path="/admin" component={Admin}/>
                    <Route path="/auth" component={Auth}/>
                    {/* add routes without layouts */}
                    <Route path="/jobseeker/profile" exact component={JobSeekerProfile}/>
                    <Route path="/employer/profile" exact component={EmployerProfile}/>
                    <Route path="/jobseeker/addCv" exact component={AddCurriculaVitae}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/" exact component={Index}/>
                    {/* add redirect for first page */}
                    <Redirect from="*" to="/"/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

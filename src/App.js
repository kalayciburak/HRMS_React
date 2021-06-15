import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import Profile from "./views/Profile";
import Index from "./views/Index";
import Home from "./views/Home";
import "tailwindcss/tailwind.css"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/* add routes with layouts */}
                <Route path="/admin" component={Admin}/>
                <Route path="/auth" component={Auth}/>
                {/* add routes without layouts */}
                <Route path="/profile" exact component={Profile}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/" exact component={Index}/>
                {/* add redirect for first page */}
                <Redirect from="*" to="/"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";

const Routes = ()=>{
  return(
    <div>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />

        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
    </div>
  )
}



export default Routes
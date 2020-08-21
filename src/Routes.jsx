import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";

const Routes = ()=>{
  return(
    <div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </div>
  )
}



export default Routes
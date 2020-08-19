import React, { useState } from 'react';
import Routes from "./Routes";
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Login from "./components/login/Login";
import './App.css';
import SignUp from './components/signup/SignUp';
import SideNav from "./components/navbar/SideNav";
import Header from "./components/navbar/Header";

function App() {
  const [menuState, setMenuState] = useState(false);
  return (
    <div>
      <Router>
        <div className="App container-app" >
        <Header menuState={menuState} setMenuState={setMenuState}/>
        <SideNav />
        <Routes />
        </div>
      </Router>

      <Login />
      <SignUp />
    </div>
    
  );
}

export default App;
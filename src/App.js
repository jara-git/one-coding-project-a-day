import React from 'react';
import Routes from "./Routes";
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Login from "./components/login/Login";
import './App.css';
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes />
        
      </Router>

      <Login />
      <SignUp />

    </div>
  );
}

export default App;
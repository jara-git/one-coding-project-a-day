import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";


// Header component triggers/ hides the sidebar
// on click shows/hides the sidebar
// the state is maintained in App component

const Header = (props) => {
    const {menuState, setMenuState} = props;
    return (
        <header class="site-header">
            <div className="brand-icon">
            <Link to="/">
                <div className="icon">
                <img className="icon-img"
                    src="https://s7.gifyu.com/images/1-project-a-day-favicon2-02-removebg-preview.png"
                    alt="project logo"
                />
                </div>
                <span>
                one small project a day
                </span>
            </Link>
            </div>
            <div>
            <button
            className={`menu-trigger ${menuState? "menu-close":""}`}
            onClick={()=> setMenuState(!menuState)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            </div>
        </header>
    );
};

export default Header;
import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";


const Header = ()=>{
    return (
        <header>
            <h1>RESTy</h1>
            <nav>
            <ul id="nav">
                <li id="li">
                    <Link to="/">Home</Link>
                </li>
                <li id="li">

                    <Link to="history">History</Link>
                </li>
                <li id="li">
                    <Link to="/help">Help</Link>

                </li>
            </ul>
            </nav>
        </header>
      
    )
}

export default Header;

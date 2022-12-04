import "./create-nav-bar.css";
import React from "react";
import logo from "../../assets/washroom-as-service.png";

import { Link } from 'react-router-dom';

export const CreateNavBar = () => {
    return (
        <div>
            <nav className="topnav">
                <div className="topnav-left">
                    <a href="/" className="active"><img className="logo" src={logo} alt="Logo" width={100}></img></a>
                    <Link to="/about">Extra</Link>
                </div>
                <div className="topnav-right">
                    <a href="/">Submit a Washroom</a>
                    <a href="/">Extra</a>
                </div>
            </nav>
        </div>
    )
}
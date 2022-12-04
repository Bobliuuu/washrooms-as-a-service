import "./create-nav-bar.css";
import React from "react";
import logo from "../../assets/washroom-as-service.png";
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { GenerateForm } from "../form/GenerateForm.jsx";
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const CreateNavBar = () => {
    return (
        <div>
            <nav className="topnav">
                <div className="topnav-left">
                    <a href="/" className="active"><img className="logo" src={logo} alt="Logo" width={100}></img></a>
                    <a href="/">Extra</a>
                </div>
                <div className="topnav-right">
                    <Router>
                    <Link to="/form">Submit a Washroom</Link>
                    </Router>
                    <a href="/">Extra</a>
                </div>
            </nav>
        </div>
    )
}


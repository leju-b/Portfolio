import React from "react";
import './header.css';

const Header = () => {
    return (
        <div id='header'>
            <nav>
                <img src="./images/logo.png" alt="" className="logo"/>
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    {/* <li><a href="#services">Projects</a></li> */}
                    <li><a href="#git">Get in Touch</a></li>
                </ul>
            </nav>
            <div className='container'>
                <div className='header-text'>
                    <p>Student</p>
                    <h1>Hi, I'm <span> Leju B </span> <br /> From India</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;

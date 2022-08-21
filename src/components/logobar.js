import React from "react";
import logo from '../assets/Joblinge_weiss.svg';

import "./logobar.css";


export default function LogoBar() {


    return (
        <section className="JobLogo-section bg-primary">

            <div className="JobLogo-container container ">
                <a href="https://joblinge.de"><img className="JobLogo-content1" src={logo} alt="Logo" /></a>
                <a href="https://joblinge.de"><img className="JobLogo-content2" src={logo} alt="Logo" /></a>
                <a href="https://joblinge.de"><img className="JobLogo-content2" src={logo} alt="Logo" /></a>
                <a href="https://joblinge.de"><img className="JobLogo-content2" src={logo} alt="Logo" /></a>
                <a href="https://joblinge.de"><img className="JobLogo-content2" src={logo} alt="Logo" /></a>
            </div>

        </section >
    )
}
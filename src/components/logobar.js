import React from "react";
import logo from '../assets/Joblinge_weiss.svg';

export default function LogoBar() {
    return (
        <section className="JobLogo-section bg-primary">
            <img className="JobLogo-content1" src={logo} alt="Logo" />
            <img className="JobLogo-content2" src={logo} alt="Logo" />
            <img className="JobLogo-content2" src={logo} alt="Logo" />
            <img className="JobLogo-content2" src={logo} alt="Logo" />
            <img className="JobLogo-content2" src={logo} alt="Logo" />
        </section>
    )
}
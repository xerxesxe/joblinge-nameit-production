import React from "react";
import Georgina from "../assets/georgina.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactImage from "../assets/contact.svg";

import "./contact.css";

export default function Contact() {
    return (
        <section className="Contact-section bg-primary">
            <div className="Write-me-container"><h2 className="write-me-text color-white">HI, SCHREIB MIR GERNE</h2>
                <div className="write-me-button">
                    <a href="mailto:Georgina.Heyland@joblinge.de"><FontAwesomeIcon icon={faEnvelope} className="Contact-btn-container" /></a> <a href="https://www.linkedin.com/in/georgina-heyland-a7ab2251/"><FontAwesomeIcon icon={faLinkedinIn} className="Contact-btn-container" /></a>
                </div>
            </div>
            <img src={ContactImage} alt="contact-decorative-image" className="contact-image" />
            <span className="Contact-info-container">
                <p className="contact-heading color-white bold">GEORGINA<br />
                    HEYLAND</p><br />
                <p>DACHORGANISATION<br />
                    TEAM LEAD<br />
                    BRAND & FUNDRAISING<br />
                    +49 (0)17672721666
                </p>
            </span>
        </section>
    )
}

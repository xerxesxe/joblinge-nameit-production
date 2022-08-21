import React from "react";
import { useState } from "react";
import "./middlepart.css";
import phoneimage from "../assets/Mockuphandy.webp";
import Cloud from "../assets/wolke3.webp";
import Cloud2 from "../assets/wolke2.webp";
import RotateText from "../assets/rotateText.svg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


export default function Middle() {

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);

    return (
        <section className="Middle-section">
            <img src={RotateText} className="rotate-text" alt="rotate text" />
            <img src={phoneimage} alt="phone" className="phone-image" />

            <img src={Cloud} alt="Cloud" className="cloud-image-left" />

            <motion.img
                drag
                dragConstraints={{ top: 50, bottom: 50, left: 10, right: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 200 }}
                src={Cloud2}
                alt="Cloud"
                className="cloud-image-right"
            />

            <div className="Middle-section-bluebox">

                <div className="Middle-section-bluebox-text">
                    <h3 className="color-white">ALLES <br /> #EINSTELLUNGSSACHE</h3>
                    <p>Oft werden ausländische Namen bei der Jobsuche benachteiligt. Gegen diese Diskriminierung möchten wir mit unserer Aktion ein Zeichen setzen. Mach mit und teile unsere Motive auf deinen Social Media Profilen.</p>
                </div>


            </div>
            <a href="https://joblinge.de" className="download color-primary">DOWNLOAD</a>
        </section >
    )
}

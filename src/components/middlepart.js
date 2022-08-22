import React from "react";
import "./middlepart.css";
import phoneimage from "../assets/Mockuphandy.webp";
import Cloud from "../assets/wolke3.webp";
import Cloud2 from "../assets/wolke2.webp";
import RotateText from "../assets/rotateText.svg";
import { motion } from "framer-motion";


export default function Middle() {

    const variantsCloud = {
        right: {
            opacity: 1,
            y: [0, -20, 5, -10, 0, -30, 4, -15, 0],
            x: [0, -20, 0, -20, 0, -20, 0],
            transition: {
                repeat: Infinity, duration: 30, ease: "easeInOut"
            }
        },
        left: {
            y: [0, -17, 2, -7, 0, -27, 1, -12, 0],
            x: [0, -17, 0, -17, 0, -17, 0],
            transition: {
                repeat: Infinity, duration: 27, ease: "easeInOut"
            }
        }
    };

    return (
        <section className="Middle-section" >
            <motion.img
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                whileHover={{ scale: 0.9, rotate: 720, transition: { duration: 3, ease: "easeInOut" } }}
                src={RotateText}
                className="rotate-text"
                alt="rotate text"
            />

            <motion.img
                animate={{
                    y: [0, -8, 0, -8, 0]
                }}
                transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", rotate: 0 }}
                src={phoneimage}
                alt="mobile-phone"
                className="phone-image"
            />

            <motion.img
                variants={variantsCloud}
                animate="left"
                src={Cloud}
                alt="Cloud"
                className="cloud-image-left"
            />

            <motion.a href="https://joblinge.de" className="download color-primary" whileTap={{ scale: 0.8 }}>DOWNLOAD</motion.a>
            <p className="download-text color-darkblue">Lade noch mehr Statements auf dein Smartphone</p>
            <motion.img
                variants={variantsCloud}
                animate="right"
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

        </section >
    )
}

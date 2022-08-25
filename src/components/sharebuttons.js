import React from "react";
import {
    FacebookShareButton,
    LinkedinShareButton, TwitterShareButton
} from 'next-share';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import nameit_hashtag from '../assets/nameit_hashtag.svg';
import "./sharebuttons.css";
import { motion, useAnimationControls } from "framer-motion";
import { BrowserView } from 'react-device-detect';

export default function Share({ downloadScreenshot, userInputState }) {

    const takeScreenshot = useAnimationControls();
    const screenshotTaken = () => {
        takeScreenshot.start({
            opacity: [0, 1],
            transition: {
                duration: 1, type: "tween"
            }
        });
    }

    const variantsDownload = {
        enabled: {
            opacity: 1,
            y: [0, -20, 10, -10, 8, -6, 4, -2, 0],
            transition: {
                duration: 2, type: "spring"
            }
        },
        disabled: {
            opacity: 0.4
        },
        disabledClick: {
            opacity: 0.4,
            x: [0, -10, 10, -10, 8, -6, 4, -2, 0],
            transition: {
                duration: 0.4, type: "tween"
            }
        },
        enabledClick: {
            opacity: 0,
            transition: {
                duration: 0.4, type: "spring"
            }

        },
        enabledHover: {
            opacity: 1,
            scale: 1.2,
            transition: {
                duration: 0.2, type: "spring"
            }
        }
    };




    return (
        <section className="Share-section" >

            <div className="share-container container fourth-step">

                <motion.a
                    variants={variantsDownload}
                    animate={userInputState ? "enabled" : "disabled"}
                    onTap={userInputState ? downloadScreenshot : null}
                    whileTap={userInputState ? ["enabledClick", screenshotTaken] : "disabledClick"}
                    whileHover={userInputState ? "enabledHover" : "disabledClick"}
                    className="Download-Image"
                    style={{ cursor: userInputState ? 'pointer' : 'not-allowed' }}
                >


                    <BrowserView><FontAwesomeIcon
                        icon={faDownload}
                        className="smedia-share-btn" /></BrowserView>
                </motion.a>

                <p className="share-text">Teile die Aktion</p>
                <BrowserView className="download-image-text">
                    <motion.p
                        style={{ opacity: userInputState ? '1' : '0' }}
                        animate={takeScreenshot}
                        className="download-image-text">
                        Download
                    </motion.p>
                </BrowserView>
                <img src={nameit_hashtag} alt="hashtag Nameit" className="nameit-image" />

                <div className="share-buttons">
                    <LinkedinShareButton url={'https://nameit.joblinge.de'} title={'Setze mit uns ein Zeichen für Chancengerechtigkeit'} summary={'Oft werden Menschen mit ausländisch klingenden Namen bei der Jobsuche benachteiligt. Wir setzen ein Zeichen'}>
                        <FontAwesomeIcon icon={faLinkedinIn} className="smedia-share-btn" />
                    </LinkedinShareButton>
                    <TwitterShareButton url={'https://nameit.joblinge.de'} title={'Setze mit uns ein Zeichen für Chancengerechtigkeit'} hashtags={['#NAMEIT']}>
                        <FontAwesomeIcon icon={faTwitter} className="smedia-share-btn" />
                    </TwitterShareButton>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="smedia-share-btn" /></a>

                    <FacebookShareButton url={'https://nameit.joblinge.de'} quote={'Oft werden Menschen mit ausländisch klingenden Namen bei der Jobsuche benachteiligt. Wir setzen ein Zeichen'} hashtag={'#NAMEITt'}>
                        <FontAwesomeIcon icon={faFacebookF} className="smedia-share-btn" />
                    </FacebookShareButton>


                </div>

            </div>

        </section >
    )
}
import React from "react";
import {
    FacebookShareButton,
    LinkedinShareButton, TwitterShareButton
} from 'next-share';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter, faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import nameit_hashtag from '../assets/nameit_hashtag.svg';
import "./sharebuttons.css";

export default function Share({ downloadScreenshot }) {


    return (
        <section className="Share-section" >

            <div className="share-container container">

                <a onClick={downloadScreenshot} className="Download-Image">
                    <FontAwesomeIcon icon={faDownload} className="smedia-share-btn" /></a>
                <p className="share-text">Teile die Aktion</p>
                <p className="download-image-text">Download</p>
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

        </section>
    )
}
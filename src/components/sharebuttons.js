import React from "react";
import {
    FacebookShareButton,
    LinkedinShareButton
} from 'next-share';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import nameit_hashtag from '../assets/nameit_hashtag.svg';
import "./sharebuttons.css";

export default function Share() {


    return (
        <section className="Share-section" >

            <div className="share-container container">
                <p className="share-text">Teile die Aktion</p>
                <img src={nameit_hashtag} alt="hashtag Nameit" className="nameit-image" />

                <div className="share-buttons">
                    <LinkedinShareButton url={'https://nameit.joblinge.de'} title={'#Nameit'} summary={'#Nameit ist eine Kampagne der JOBLINGE-Initiative.'}>
                        <FontAwesomeIcon icon={faLinkedinIn} className="smedia-share-btn" />
                    </LinkedinShareButton>

                    <FontAwesomeIcon icon={faInstagram} className="smedia-share-btn" />

                    <FacebookShareButton url={'https://nameit.joblinge.de'} quote={'#Nameit ist eine Kampagne der JOBLINGE-Initiative.'} hashtag={'#Nameit'}>
                        <FontAwesomeIcon icon={faFacebookF} className="smedia-share-btn" />
                    </FacebookShareButton>
                </div>
            </div>

        </section>
    )
}
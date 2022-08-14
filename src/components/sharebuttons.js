import React from "react";
// import { useState } from "react";

import {
    EmailShareButton,
    FacebookShareButton,
    // InstapaperShareButton,
    LinkedinShareButton
    // PocketShareButton,
    // TelegramShareButton,
    // TwitterShareButton,
    // WhatsappShareButton
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    // FacebookMessengerIcon,
    LinkedinIcon
    // TelegramIcon,
    // TwitterIcon,
    // WhatsappIcon
} from "react-share";

export default function Share() {

    //create an linkedin share button



    return (
        <div className="share-buttons">
            <EmailShareButton url="https://joblinge.com" subject="Check out Joblinge!">
                <EmailIcon size={62} />
            </EmailShareButton>
            <FacebookShareButton url="https://joblinge.com" quote="Check out Joblinge!" hashtag="#joblinge">
                <FacebookIcon size={62} />
            </FacebookShareButton>
            <LinkedinShareButton url="https://joblinge.com" title="Check out Joblinge!" description="Check out Joblinge!" source="nameit.joblinge.de" image="'//media.example.com/ 1234567.jpg'/">
                <LinkedinIcon size={62} />
            </LinkedinShareButton>
        </div>
    );
}
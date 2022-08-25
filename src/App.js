
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import Name from "./components/nameGen"
import awsconfig from './aws-exports';
import LogoBar from './components/logobar';
import Share from './components/sharebuttons';
import Middle from './components/middlepart';
import Contact from './components/contact';
import Footer from './components/footer';
import React from 'react';
import { createRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { TourProvider } from "@reactour/tour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import tourSteps from "./assets/tourSteps";


Amplify.configure(awsconfig);


const createFileName = (extension = "", ...names) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};

function App() {

  //disable scroll on body when tour is open
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);


  //passing Unput State to Share Component
  const [userInputState, setUserInputState] = useState(false);

  //----------------------------screenshot------------------------------------------------------

  //screenshot state for share component
  const ref = createRef(null);



  const takeScreenShot = async (node) => {
    const dataURI = await htmlToImage.toJpeg(node, { imagePlaceholder: "../public/social_media_image.jpg" });
    return dataURI;
  };

  const download = (image, { name = "MYNAME_NAMEIT", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);



  return (
    <TourProvider
      steps={tourSteps}
      scrollSmooth={true}
      afterOpen={disableBody}
      beforeClose={enableBody}
    >
      <div className="App">

        <main className="App-main">
          <section className="Hero-section" ref={ref} >

            <div className="Hero-section-container" >

              <div className="Hero-section-form container" >
                <Name setUserInputState={setUserInputState} />
              </div>
              <Share downloadScreenshot={downloadScreenshot} userInputState={userInputState} />
            </div>

          </section>
          <LogoBar />

          <Middle />
          <Contact />
        </main >
        <Footer />
      </div>
    </TourProvider >
  );
}

export default App;


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
// import React from 'react';
// import { createRef, useState } from "react";
import * as htmlToImage from "html-to-image";

Amplify.configure(awsconfig);

// const createFileName = (extension = "", ...names) => {
//   if (!extension) {
//     return "";
//   }

//   return `${names.join("")}.${extension}`;
// };

function App() {

  // const [userInputState, setUserInputState] = useState(false);
  // const ref = createRef(null);

  // const takeScreenShot = async (node) => {
  //   const dataURI = await htmlToImage.toJpeg(node);
  //   return dataURI;
  // };

  // const download = (image, { name = "MYNAME_#NAMEIT", extension = "jpg" } = {}) => {
  //   const a = document.createElement("a");
  //   a.href = image;
  //   a.download = createFileName(extension, name);
  //   a.click();
  // };

  // const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  // <section className="Hero-section" ref={ref} >
  //   <Name /> //
  //   </div>
  //   <Share downloadScreenshot={downloadScreenshot} userInputState={userInputState} />
  // </div>


  return (

    <div className="App">

      <main className="App-main">
        <section className="Hero-section" >

          <div className="Hero-section-container" >

            <div className="Hero-section-form container" >
              <Name />
            </div>
            <Share />
          </div>

        </section>
        <LogoBar />

        <Middle />
        <Contact />
      </main >
      <Footer />
    </div>

  );
}

export default App;

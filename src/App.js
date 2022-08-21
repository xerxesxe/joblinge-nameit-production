
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import Name from "./components/nameGen"
import awsconfig from './aws-exports';
import LogoBar from './components/logobar';
import Share from './components/sharebuttons';
import Middle from './components/middlepart';


Amplify.configure(awsconfig);



function App() {


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
      </main >
    </div>

  );
}

export default App;

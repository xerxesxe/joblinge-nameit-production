
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import Name from "./components/nameGen"
import awsconfig from './aws-exports';
import LogoBar from './components/logobar';
import Share from './components/sharebuttons';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <section className="Hero-section">
        <div className="Hero-section-container">
          <Name />
          <Share />
        </div>
      </section>
      <LogoBar />
    </div>
  );
}

export default App;

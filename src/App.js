
import './App.css';
import './fonts/Merriweather-Bold.ttf'
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import Name from "./nameGen"
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <section className="Name-section">
        <div className="Name-content">
          <Name />

          {/* <h2 className="Name-input">Coming Soon</h2>
          <h2 className="Name-input">#nameit</h2> */}
        </div>
      </section>
    </div>
  );
}

export default App;

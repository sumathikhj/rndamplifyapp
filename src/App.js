import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, {Auth} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
Auth.configure(config);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Welcome HCL TEAM!!
        </a>
      </header>
	   <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

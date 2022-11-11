import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RoutesComponent from './components/RoutesComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hi, this is a React project.</h1>
        <p>You are reading a paragraph within the App component.</p>
        <p>Here are some links:</p>
        <ul className="App-link-li">
          <li>
            <Link to="/components/home">Home</Link>
          </li>
          <li>
            <Link to="/components/login">Login</Link>
          </li>
          <li>
            <Link to="/components/error">Error</Link>
          </li>
        </ul>
        <RoutesComponent />
      </div>
    </Router>
  );
}

export default App;

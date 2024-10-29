import './App.css';
import logo from './holberton_logo.jpg';
import {getFullYear, getFooterCopy} from './utils.js';

function App() {

  let isIndex = true;
  return (
    <div>
      {/* Header Section */}
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='Site Logo'/>
        <h1>School dashboard</h1>
      </div>

      {/* Body Section */}
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>

      {/* Footer section */}
      <div className='App-footer'>
        <p>&copy; {getFullYear()} - {getFooterCopy(isIndex)}</p>
        
      </div>
    </div>
  );
}

export default App;

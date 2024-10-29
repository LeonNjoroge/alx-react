import './App.css';
import logo from './holberton_logo.jpg'

function App() {
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
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;

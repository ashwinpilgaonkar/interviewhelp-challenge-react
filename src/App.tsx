import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card 
        avatarURL={''} 
        name={'Daniel W. Ellis'} 
        title={'Web Developer'} 
        chartURL={''} 
        impressions={'20,345'} 
        conversions={'1,987'} 
        dollar={'53,982'} />
    </div>
  );
}

export default App;

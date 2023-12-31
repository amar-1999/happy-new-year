import React from 'react';
import './App.css'; // Add CSS file for styling

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy New Year <span class="redTextWithBorder">{new Date().getFullYear()}</span>
        </h1>
        <p style={{ width: '80%', textAlign: 'center' }}>
          New Year Wishes : You may have had some really good memories about the past one,
          but you never know what the new one is bringing for you.
          It's time to be hopeful, have new dreams and make some new resolutions for the new year in your life.
        </p>
      </header>
    </div >
  );
}

export default App;

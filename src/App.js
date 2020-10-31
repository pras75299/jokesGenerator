import React from 'react';
import './App.css';
const API_URL = `http://api.icndb.com/jokes/random`;

function App() {  
  return (
    <div className="box">
      <h2>Jokes Generator</h2>
      <p>Here comes the jokes</p>
      <button>Get the Joke</button>
    </div>
  );
}

export default App;

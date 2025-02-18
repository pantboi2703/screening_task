import React, { useState } from 'react'
import './App.css'; 

const App = () => {
  const [name,setName] = useState('');
  const [message,setMessage] = useState('');

  const getGreeting = async () => {
    const response = await fetch(`/api/greet?name=${name}`);
    const data = await response.json();
    if (response.ok) {
      setMessage(data.message);
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Younglabs Greeting App</h1>
      <div className="input-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={getGreeting}>Get Greeting</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App
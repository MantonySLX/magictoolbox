
import React, { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>SLX Magic Tool Box</h1>
      </header>
      <main>
        {!loggedIn ? (
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        ) : (
          <div className="app-launcher">
            <button>SLX UTM Magic</button>
            <button>SLX Roadmap Generator</button>
            <button>SalesLabX</button>
            <button>SLX Journey Estimator</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

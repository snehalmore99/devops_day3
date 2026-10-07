import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="app">
      <div className="card">
        <div className="icon">🚀</div>

        <h1>React + AWS EC2</h1>

        <p className="subtitle">
          My first DevOps deployment
        </p>

        <div className="status">
          <span className="dot"></span>
          Application is running
        </div>

        <button onClick={() => setMessage("Deployment is working! 🎉")}>
          Test Deployment
        </button>

        {message && <p className="success">{message}</p>}

        <div className="info">
          <p><strong>Frontend:</strong> React</p>
          <p><strong>Server:</strong> AWS EC2</p>
          <p><strong>Status:</strong> Running</p>
        </div>
      </div>
    </div>
  );
}

export default App;

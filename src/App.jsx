// Importing React Hook 'useState' for state management
import { useState } from 'react';

// Importing assets (logos)
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

// Importing global CSS styles
import './styles/style.css';

// Main App Component
function App() {
  
  // State variable 'count' initialized to 0 with its setter function 'setCount'
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Logo links to Vite and React websites */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img 
            src={viteLogo} 
            className="logo" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img 
            src={reactLogo} 
            className="logo react" 
            alt="React logo" 
          />
        </a>
      </div>

      {/* Application heading */}
      <h1>React Application With Jenkins CI-CD Pipeline 🚀</h1>

      {/* Card section with counter button */}
      <div className="card">
        <button 
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          count is {count}
        </button>
      </div>

      {/* Footer text */}
      <p className="read-the-docs">
        Click to learn more ...
      </p>
    </>
  );
};

// Exporting the App component
export default App;
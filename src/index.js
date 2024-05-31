import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root container
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Render the app using the createRoot API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

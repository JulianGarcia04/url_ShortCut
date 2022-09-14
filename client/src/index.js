import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/styles/index.css';
import App from './views/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

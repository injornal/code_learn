/**
 * @file index.tsx
 * @summary This is the entry point of the React application.
 * It renders the main App component into the DOM and sets up React Router.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

/**
 * Creates a React root for the application.
 * @type {ReactDOM.Root}
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/**
 * Renders the React application into the DOM.
 * The application is wrapped in `React.StrictMode` for development checks
 * and `BrowserRouter` for client-side routing.
 */
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/**
 * Reports web vitals for performance monitoring.
 * Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();

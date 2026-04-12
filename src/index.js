import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import emailjs from '@emailjs/browser';

import './assets/fonts/RedWing/Redwing-Light.otf'

// Initialize EmailJS once at app startup (v4+ syntax)
emailjs.init({
  publicKey: 'VPC-Dijre1Ltay59L',
  blockHeadless: false,
  limitRate: {
    throttle: 2000,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

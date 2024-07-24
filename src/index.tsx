import React from 'react';
import { createRoot } from 'react-dom/client';
import { HolaMundo } from './components/HolaMundo';
import logo from './content/logo.png';
import './mystyles.css';

const root = createRoot(document.getElementById('root'));
console.log('NODE_ENV: ', process.env.NODE_ENV);
console.log('API_URL: ', process.env.API_URL);

root.render(
  <div>
    <h1 className="red-background">React DOM</h1>
    <HolaMundo />
    <img src={logo} style={{ width: 150 }} />
  </div>,
);

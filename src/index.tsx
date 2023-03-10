import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/GlobalStyles.css"
import App from './App';
import "@fontsource/poppins"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


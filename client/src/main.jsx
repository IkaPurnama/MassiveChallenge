import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import './main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
import Router from './Router';
import { ClientProvider } from './components/client';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ClientProvider>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </ClientProvider>
);

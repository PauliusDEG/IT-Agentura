import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Pradinis from './components/Pradinis';
import ApieMus from './components/ApieMus';
import Portfelis from './components/Portfelis';
import Spaceman from './components/Spaceman';
import Kontaktai from './components/Kontaktai';
import Susisiekite from './components/Susisiekite';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Pradinis />} />
          <Route path="ApieMus" element={<ApieMus />} />
          <Route path="Portfelis" element={<Portfelis />} />
          <Route path="Spaceman" element={<Spaceman />} />
          <Route path="Kontaktai" element={<Kontaktai />} />
          <Route path="Susisiekite" element={<Susisiekite />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
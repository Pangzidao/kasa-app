import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Apartments from './pages/Apartments'
import Header from './components/Header';
import About from './pages/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/apartments" element={<Apartments />}/>
        <Route path="/about" element={<About />}/>

      </Routes>
    </Router>
  </React.StrictMode>
);

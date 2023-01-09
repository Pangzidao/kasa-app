import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Apartment from './pages/Apartment'
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import PageError from './pages/PageError';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/apartment/:apartmentId" key={Apartment.id} element={<Apartment />}/>
          <Route path="*" element={<PageError />}/>
        </Routes>
      <Footer />
    </Router>
  </React.Fragment>
);

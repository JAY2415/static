import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <MainContent />
    <Footer />
  </>
);

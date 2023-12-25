import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '@components/Navbar';
import MainContent from '@components/MainContent';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Navbar />
    <MainContent />
  </div>
);

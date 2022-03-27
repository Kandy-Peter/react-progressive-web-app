import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' exact element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

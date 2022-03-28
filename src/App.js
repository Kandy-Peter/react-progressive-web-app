import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopPicks from './pages/Topics';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/top-picks' exact element={<TopPicks />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

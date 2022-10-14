import './App.css';
import Home from './components/Home'
import Products from './components/Products'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (<Router>
    <div className='content'>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  </Router>
  );

}


export default App;


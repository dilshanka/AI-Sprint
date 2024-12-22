
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from '../src/components/ProductDetails';
import ProductInfo from './pages/ProductInfoPage';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={< Home/>} />
        <Route path="/product" element={< ProductInfo/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

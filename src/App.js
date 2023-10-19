import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar';
import AddShop from './components/AddShop';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/add-shop" element={<AddShop />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
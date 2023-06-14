import React from "react";
import "./App.css";
import { Routes,Route } from "react-router-dom";

import Home from './pages/Home'
import CartItems from "./pages/CartItems";
import Favorite from "./pages/Favorite";
import ProductCategory from "./components/ProductCategory";
import ProductsPage from "./pages/ProductsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App text-3xl font-bold underline">
      <NavBar />
       <Footer />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/cart" element={<CartItems />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/category" element={<ProductCategory />}/>
      </Routes>
    </div>
  );
}

export default App;

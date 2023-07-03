import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CartItems from "./pages/CartItems";
import Favorite from "./pages/Favorite";
import ProductsPage from "./pages/ProductsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Electronics from "./components/Electronics";
import LoginPage from "./components/LoginPage";
import ProductDetails from "./components/ProductDetails";




function App() {
    const [checked, setChecked] = React.useState(false);

    const handleChangeup = () => {
      setChecked((prev) => !prev);
    };
  return (
    <div
      className="App "
      style={{
       
        backgroundColor: checked ? "#fff000" : "inherit", 
      }}
    >
      <NavBar handleChangeup={handleChangeup} checked={checked} />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/favorite" element={<Favorite />} />

        <Route path="/Electronic" element={<Electronics />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

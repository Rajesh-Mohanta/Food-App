import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home"; // Import Home component
import Cart from "./Pages/Cart/Cart"; // Import Cart component
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"; // Import PlaceOrder component

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} /> {/* Corrected path */}
      </Routes>
    </div>
  );
}

export default App;

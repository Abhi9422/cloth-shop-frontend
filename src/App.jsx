import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import { useState } from "react";
import Contact from "./pages/Contact";

export default function App() {
  const[showSearch, setShowSearch] = useState(false);
  return (
    <div className=" px-4  sm:px-[5vw] md:px-[7vw] lg:px-[9vW]" >
       <NavBar showSearch ={showSearch} setShowSearch={setShowSearch}/>
        {showSearch && <Search setShowSearch={setShowSearch}/>}
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} /> 
        <Route  path="/collection" element={<Collection/>} />
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/orders" element={<Orders/>} />
        <Route  path="/products/:productId" element={<Product/>} />
        <Route  path="/place-order" element={<PlaceOrder/>} />
        <Route  path="/contact" element={<Contact/>} />




      </Routes>

    </div>
  )
}
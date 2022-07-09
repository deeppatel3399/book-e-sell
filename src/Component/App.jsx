import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Cart from "./Cart";
import Product from './Product';
import ProductListing from "./Product-Listing";
import EditProduct from './Edit-Product';
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

import { Routes , Route } from "react-router-dom";

const App = () => {

 
  return (
    <>
      <Navbar/>
      <Searchbar/>
      <Routes>
             <Route exact path='/' element={<Login/>} />
             <Route exact path='/login' element={<Login/>} />
             <Route exact path='/register' element={<Register/>} />
             <Route exact path='/cart' element={<Cart/>} />
             <Route exact path="/product" element={<Product/>}/>
             <Route exact path="/product-listing" element={<ProductListing/>}/>
             <Route exact path="/edit-product" element={<EditProduct/>}/>
       </Routes>
    </>
  );
}

export default App;

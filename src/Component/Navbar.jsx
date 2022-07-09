import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/site-logo.svg';

const Navbar = () => {
  return (
    <>
      <div className="line">
      </div>
      <center>
      <div className="container">
        <header>
            <NavLink to="/"><img  className="logo" src={logo} alt="logo"/></NavLink>
            <nav>
                <ul className="links">
                    <li className="pages"><NavLink  className="pages-text" to="/login">Login</NavLink></li>
                    <li className="pages" id="section">|</li>
                    <li className="pages"><NavLink  className="pages-text" to="/register">Register</NavLink></li>
                    <NavLink  className="pages-text" to="/cart"><button className="cart"><i className="fas fa-shopping-cart"></i>&nbsp;<span id="no">0</span> Cart</button></NavLink>
                </ul>
            </nav>
        </header>
      </div>
      </center>
    </>
  );
}

export default Navbar;

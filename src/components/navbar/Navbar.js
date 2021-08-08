import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">FLIPKART</Link>
      </div>
      <div>SEARCH</div>
      <div>
        <Link to="/cart">CART</Link>
      </div>
    </div>
  );
}

export default Navbar;

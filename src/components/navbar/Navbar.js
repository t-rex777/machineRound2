import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="navbar__items">
          FLIPKART
        </Link>
      </div>
      
      <div>
        <Link className="navbar__items" to="/cart">
          CART
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

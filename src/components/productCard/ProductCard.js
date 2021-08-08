import React from "react";
import "./productCard.css";
import { useCart } from "./../../cartContext/CartProvider";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  const { state, dispatch } = useCart();
  const addToCart = () => [dispatch({ type: "ADD_TO_CART", payload: product })];

  const isInCart = () => {
    const checkCart = state.cart.find((item) => item.product.id === product.id);
    return checkCart ? true : false;
  };
  return (
    <div className="productcard">
      <img
        className="productcard__thumbnail"
        src={product.thumbnail}
        alt="product"
      />
      <p className="productcard__brand">{product.brand}</p>
      <p className="productcard__name">{product.name}</p>
      <p className="productcard__price">₹{product.price}</p>
      {isInCart() ? (
        <Link to="/cart">
          <button className="productcard__cartbtn">Go to cart</button>
        </Link>
      ) : (
        <button className="productcard__cartbtn" onClick={addToCart}>
          Add to cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;

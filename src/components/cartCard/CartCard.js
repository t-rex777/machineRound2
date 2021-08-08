import React from "react";
import "./cartcard.css";
import { useCart } from "./../../cartContext/CartProvider";
function CartCard({ product, quantity, savedItems }) {
  const { dispatch } = useCart();
  const addToCart = () => [dispatch({ type: "ADD_TO_CART", payload: product })];
  const removeProductFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };
  const removeProductFromSavedItems = () => {
    dispatch({ type: "REMOVE_FROM_SAVEDITEMS", payload: product.id });
  };
  const increaseQnt = () => {
    dispatch({ type: "INCREASE_QNT", payload: product.id });
  };
  const decreaseQnt = () => {
    dispatch({ type: "DECREASE_QNT", payload: product.id });
  };
  const addToSavedItems = () => {
    dispatch({ type: "ADD_TO_SAVEDITEMS", payload: product });
  };
  return (
    <div className="cartcard">
      <div>
        <img
          className="cartcard__thumbnail"
          src={product.thumbnail}
          alt="product"
        />
      </div>
      <div>
        <p className="cartcard__brand">{product.brand}</p>
        <p className="cartcard__name">{product.name}</p>
        <p className="cartcard__price">₹{product.price}</p>
        <div className="cartcard__qnt">
          <button disabled={savedItems} onClick={decreaseQnt}>
            -
          </button>
          <p>{quantity}</p>
          <button disabled={savedItems} onClick={increaseQnt}>
            +
          </button>
        </div>
      </div>
      <div className="cartcard__interactions">
        <button
          onClick={
            savedItems ? removeProductFromSavedItems : removeProductFromCart
          }
        >
          Remove
        </button>
        {!savedItems ? (
          <button onClick={addToSavedItems}>Save for later</button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

export default CartCard;

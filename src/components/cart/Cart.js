import React from "react";
import CartCard from "../cartCard/CartCard";
import { useCart } from "./../../cartContext/CartProvider";

function Cart() {
  const { state, dispatch } = useCart();
  return (
    <div>
      <div>
        <h2>Cart({state.cart.length})</h2>
        {state.cart.map((item) => (
          <CartCard product={item.product} quantity={item.quantity} />
        ))}
      </div>
      <div>
        <h2>Saved Items({state.savedItems.length})</h2>
        {state.savedItems.map((item) => (
          <CartCard
            savedItems={true}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;

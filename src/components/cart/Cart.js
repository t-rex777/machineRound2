import React from "react";
import "./cart.css";
import CartCard from "../cartCard/CartCard";
import Checkout from "../checkout/Checkout";
import { useCart } from "./../../cartContext/CartProvider";
import NoProducts from "./NoProducts";

function Cart() {
  const { state } = useCart();
  return (
    <>
      {state.cart.length > 0 ? (
        <div className="cart">
          <div className="cart__items">
            <div>
              <h2>Cart({state.cart.length})</h2>
              {state.cart.map((item) => (
                <CartCard product={item.product} quantity={item.quantity} />
              ))}
            </div>
            {state.savedItems.length > 0 && (
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
            )}
          </div>

          <Checkout />
        </div>
      ) : (
        <NoProducts />
      )}
    </>
  );
}

export default Cart;

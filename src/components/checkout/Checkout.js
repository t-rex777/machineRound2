import React, { useEffect, useState } from "react";
import "./checkout.css";
import { useCart } from "./../../cartContext/CartProvider";

function Checkout() {
  const [amount, setAmount] = useState(0);
  const { state } = useCart();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculatePrice = () => {
    let price = 0;
    state.cart.forEach((item) => {
      price = price + item.quantity * item.product.price;
    });
    setAmount(price);
  };

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>price : ₹{amount}</p>
      <p>discount : ₹{(amount * 0.1).toFixed(2)}</p>
      <p>total amount : ₹{amount - (amount * 0.1).toFixed(2)}</p>
    </div>
  );
}

export default Checkout;

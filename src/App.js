import React from "react";
import Products from "./components/products/Products";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import Products from "./components/products/Products";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={Products} />
          {/* <Route  /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

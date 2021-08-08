import React from "react";
import "./productCard.css";
function ProductCard({ product }) {
  return (
    <div className="productcard">
      <img
        className="productcard__thumbnail"
        src={product.thumbnail}
        alt="product"
      />
      <p className="productcard__brand">{product.brand}</p>
      <p className="productcard__name">{product.name}</p>
      <p className="productcard__price">{product.price}</p>

      <button className="productcard__cartbtn">Add to cart</button>
    </div>
  );
}

export default ProductCard;

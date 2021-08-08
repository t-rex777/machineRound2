import "./products.css";
import { productDetails } from "./../../data";
import ProductCard from "./../productCard/ProductCard";
function Products() {
  return (
    <div className="products">
      {JSON.parse(productDetails).map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;

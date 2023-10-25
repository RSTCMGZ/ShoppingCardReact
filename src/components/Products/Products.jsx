import ProductItem from "./ProductItem";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} products={products} />
      <h1 className="text-center mb-5 text-danger fw-bold text-uppercase">
        Products
      </h1>
      <div className="products text-center flex-wrap d-flex align-items-center justify-content-center  gap-5">
        {products.length === 0 ? (
          <h2 className="text-center text-danger fw-bold text-uppercase">
            Sepette ürün yok!
          </h2>
        ) : (
          products.map((product) => (
            <ProductItem
              key={product.productName}
              product={product}
              products={products}
              setProducts={setProducts}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;

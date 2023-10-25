import AddProduct from "./AddProduct";
import ProductForm from "./ProductForm";
import React, { useState } from "react";

const NewProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen ? (
        <ProductForm
          setIsOpen={setIsOpen}
          setProducts={props.setProducts}
          products={props.products}
        />
      ) : (
        <AddProduct setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default NewProduct;

import React from "react";

function AddProduct({ setIsOpen }) {
  return (
    <div className=" d-flex  align-items-center justify-content-center m-5">
      <button className="btn btn-success " onClick={setIsOpen}>
        Yeni Ürün Ekle
      </button>
    </div>
  );
}

export default AddProduct;

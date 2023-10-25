import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProductForm = (props) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const titleChangeHandler = (event) => {
    setProductName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newProductData = {
      productName,
      productPrice,
      imageUrl,
    };

    // props.setProducts((prevState) => [...prevState, newProductData]);
    props.setProducts([...props.products, newProductData]);

    setProductName("");
    setProductPrice("");
    setImageUrl("");
  };

  return (
    <Form
      className="m-2 d-flex flex-column align-items-center justify-content-center"
      onSubmit={submitHandler}
    >
      <Form.Group className="mb-3  text-danger fw-bold text-uppercase">
        <Form.Label>Ürün Adı: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Ürün Adı Giriniz... "
          onChange={titleChangeHandler}
          value={productName}
        />
      </Form.Group>

      <Form.Group
        className="mb-3  text-danger fw-bold text-uppercase"
        controlId="formBasicPassword"
      >
        <Form.Label>Ürün Fiyatı:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ürün Fiyatı Giriniz..."
          onChange={priceChangeHandler}
          value={productPrice}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 text-danger fw-bold text-uppercase"
        controlId="formBasicPassword"
      >
        <Form.Label>Ürün Görseli:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ürün Görseli Giriniz..."
          onChange={imageChangeHandler}
          value={imageUrl}
        />

        <Button
          variant="success"
          type="submit"
          className=" w-100 mt-3 text-uppercase fw-bold"
        >
          Ürün Ekle
        </Button>
        <Button
          variant="danger"
          type="button"
          className=" w-100 mt-3 text-uppercase fw-bold"
          onClick={() => props.setIsOpen(false)}
        >
          Vazgeç
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ProductForm;

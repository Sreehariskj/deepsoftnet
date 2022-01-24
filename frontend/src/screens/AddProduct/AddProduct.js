import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./AddProduct.css";
import "../common.css";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(title, price, quantity, category);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { product } = await axios.post(
        "/api/products",
        {
          title,
          price,
          quantity,
          category,
        },
        config
      );

      // console.log(product);

      // @redirect to dashboard
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} action="">
        <div className="card">
          <h1>Add Product</h1>
          <input
            type="text"
            className="inputField"
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <input
            type="number"
            className="inputField"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          ></input>
          <input
            type="number"
            className="inputField"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          ></input>
          <select
            className="selectField"
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled selected hidden>
              Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="fruit">Fruit</option>
          </select>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

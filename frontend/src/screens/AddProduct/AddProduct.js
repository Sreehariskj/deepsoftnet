import React from "react";
// import "./AddProduct.css";
import "../common.css"

function AddProduct() {
  return (
    <div className="container">
      <form>
      <div className="card">
        <h1>Add Product</h1>
        <input type="text" className="inputField" placeholder="Name"></input>
        <input type="number" className="inputField" placeholder="Price"></input>
        <input type="number" className="inputField" placeholder="Quantity"></input>
        <select  className="selectField" name="category" id="category">
        <option value="" disabled selected hidden>Category</option>
          <option value="grocery">Grocery</option>
          <option value="fruit">Fruit</option>
        </select>
        <button className="button">Add</button>
      </div>
      </form>
    </div>
  );
}

export default AddProduct;

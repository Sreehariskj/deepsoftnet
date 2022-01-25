import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DashBoard.css";

const data = [
  { product: "Product 2", price: 10 },
  { product: "Product 3", price: 20 },
];

function DashBoard() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      // @get user data
      const userInfo = localStorage.getItem("userInfo");
      console.log(userInfo);

      // @check is user loggedin
      if (!userInfo) {
        navigate("/login");
      }
    };
    checkUser();

    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      // console.log(data.items);

      setProducts(data.items);
    };
    fetchProducts();
  }, [navigate]);

  return (
    <div className="d-container">
      <div className="d-box">
        <h1>Dash Board</h1>
        <button className="addBtn" onClick={() => navigate("/addproduct")}>
          Add product
        </button>
        <div className="row">
          <input className="searchInput" placeholder="search"></input>
          <select name="category" id="category">
            <option value="" disabled selected hidden>
              Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="fruit">Fruit</option>
          </select>
          <button className="searchBtn">search</button>
        </div>

        <table>
          <tr>
            <th class="table-head">
              <input type="checkbox" id="select_all_checkboxes" />
            </th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td class="table-head">
                  <input type="checkbox" id={key} />
                </td>
                <td>{val.product}</td>
                <td>$ {val.price}</td>
                <td>edit</td>
                <td>delete</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="l-box">
        <h1>Latest</h1>
        <div className="l-cards">
          {products.map((product) => {
            return (
              <div className="l-card" key={product._id}>
                <p>{product.title}</p>
                <p>{product.price} Rs</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;

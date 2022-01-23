import React from "react";
// import { Link } from "react-router-dom";
import "./DashBoard.css";

const data = [
  { product: "Product 2", price: 10 },
  { product: "Product 3", price: 20 },
];
const latest = [
  { product: "Product 1", price: 10 },
  { product: "Product 2", price: 10 },
  { product: "Product 3", price: 20 },
  { product: "Product 4", price: 10 },
];

function DashBoard() {
  return (
    <div className="d-container">
      <div className="d-box">
        <h1>Dash Board</h1>
        <button className="addBtn">Add product</button>     
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
          {latest.map((val,key) =>{
            return(
              <div className="l-card" key={key}>
                <p>{val.product}</p>
                <p>$ {val.price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;

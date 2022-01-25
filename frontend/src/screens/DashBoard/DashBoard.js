import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DashBoard.css";

function DashBoard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);
  const [filter, setFilter] = useState([]);

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

  const filterProducts = () => {
    let filteredProduct;

    // @filter search from product
    filteredProduct = products.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    // console.log("first filter:",filteredProduct);

    if (category !== null) {
      // @filter category from filteredProduct
      filteredProduct = filteredProduct.filter(
        (product) => product.category === category
      );
    }
    // console.log('second filter:',filteredProduct)
    setFilter(filteredProduct);
    // console.log(filter);
  };

  return (
    <div className="d-container">
      <div className="d-box">
        <h1>Dash Board</h1>
        <button className="addBtn" onClick={() => navigate("/addproduct")}>
          Add product
        </button>
        <div className="row">
          <input
            className="searchInput"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="fruit">Fruit</option>
          </select>
          <button className="searchBtn" onClick={filterProducts}>
            search
          </button>
        </div>

        {filter.length !== 0 && (
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

            {filter.map((val, key) => {
              return (
                <tr key={key}>
                  <td class="table-head">
                    <input type="checkbox" id={key} />
                  </td>
                  <td>{val.title}</td>
                  <td>$ {val.price}</td>
                  <td>edit</td>
                  <td>delete</td>
                </tr>
              );
            })}
          </table>
        )}
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

import React, { useState } from "react";
import "../common.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email,password)

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      // @redirect to dashboard after sucess login
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} action="">
        <div className="card">
          <h1>Login</h1>
          {error && <h4>{error} !</h4>}
          <input
            type="email"
            className="inputField"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="inputField"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

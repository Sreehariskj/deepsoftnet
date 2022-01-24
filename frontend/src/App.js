import "./App.css";
import Header from "./components/Header/Header";
import Login from "./screens/Login/Login";
import DashBoard from "./screens/DashBoard/DashBoard";
import AddProduct from "./screens/AddProduct/AddProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route exact path="/" element={<DashBoard />}></Route>
            <Route path="/addproduct" element={<AddProduct />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

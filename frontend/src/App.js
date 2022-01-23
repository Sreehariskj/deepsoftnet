import './App.css';
import Header from './components/Header/Header';
import Login from './screens/Login/Login';
import DashBoard from './screens/DashBoard/DashBoard';
import AddProduct from './screens/AddProduct/AddProduct';


function App() {
  return (
    <div>
      <Header />
      {/* <Login></Login> */}
      {/* <DashBoard></DashBoard> */}
      <AddProduct></AddProduct>

    </div>
    
  );
}

export default App;

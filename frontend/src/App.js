import './App.css';
import Header from './components/Header/Header';
import Login from './screens/Login/Login';
import DashBoard from './screens/DashBoard/DashBoard';


function App() {
  return (
    <div>
      <Header />
      {/* <Login></Login> */}
      <DashBoard></DashBoard>
    </div>
    
  );
}

export default App;

import { Outlet } from "react-router";
import { Link } from "react-router";


import './App.css'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to ="">Home</Link>
        </li>
        <li>
          <Link to = "shopping">Shopping</Link>
        </li>
        <li>
          <Link to = "cart">Cart</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
      
    </div>
  );
};

export default App;



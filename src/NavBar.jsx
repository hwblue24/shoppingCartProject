import { Outlet } from "react-router";
import { Link } from "react-router";
import {useState} from "react";


import './App.css'

const NavBar = () => {
  
  const [cartCount, setCartCount] = useState(null); //handles cartCount
  

  return (
    
    <div>
      <ul>
        <li>
          <Link to ="">Home</Link>
        </li>
        <li>
          <Link to = "shopping">Shopping{cartCount}</Link>
        </li>
        <li>
          <Link to ="cart">Cart</Link>
        </li>
      </ul>
      <hr />
      <Outlet context={[cartCount, setCartCount]} />;
      
    </div>
  );
};

export default NavBar;



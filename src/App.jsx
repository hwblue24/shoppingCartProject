import { Outlet } from "react-router";

import './App.css'

const App = () => {
  return (
    <div>
      <h1>Home      Shopping       Cart</h1>
      <hr />
      <Outlet />
      
    </div>
  );
};

export default App;



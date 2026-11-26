import { Link } from "react-router";
import { useOutletContext } from "react-router";
const Shopping = () => {
  const [cartCount, setCartCount] = useOutletContext();


  const increment = () => {
    setCartCount(cartCount+1)
  }
  return (
    <>
      <h1>Shopping Page</h1>
      <div>
        <div>
        Item 1
        <button onClick = {increment}>Add To Cart</button>
        </div>
      </div>

      
    </>
  );
};

export default Shopping;

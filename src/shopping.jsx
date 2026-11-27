import { Link } from "react-router";
import { useOutletContext } from "react-router";
const Shopping = () => {
  const [cartCount, setCartCount, itemCount, setItemCount] = useOutletContext();

  const incrementItem = () => {
    setItemCount(itemCount+1)
  }

  const decrementItem = () => {
    setItemCount(itemCount-1)
  }

  const incrementCartCount = () => {
    setCartCount(cartCount+1)
  }
  return (
    <>
      <h1>Shopping Page</h1>
      <div>
        <div>
          <div>
            Item 1 image
          </div>
          <div className = "itemQuantityParent" >
            <button className="decrement" onClick = {decrementItem}>
              -
            </button>
            
            <input 
              type="text" 
              name="itemQuantity" 
              id="itemQuantity" 
              value = {itemCount}
              onChange = {(e) => setItemCount(Number(e.target.value))}
            />

            <button className="increment" onClick = {incrementItem}>
              +
            </button>

          </div>
      
        <button onClick = {incrementCartCount}>Add To Cart</button>
        </div>
      </div>

      
    </>
  );
};

export default Shopping;

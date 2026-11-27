import { Link } from "react-router";
import {useState} from "react"
import { useOutletContext } from "react-router";


const Shopping = () => {

  return (
    <>
    <h1>Shopping Page</h1>
      < ProductCards
        title = {"Item 1"}
      />

      < ProductCards
       title = {"Item 2"}
      />

      < ProductCards
       title = {"Item 3"}
      />
    </>
  );
};


const ProductCards = ({title})=> {

  const [itemCount, setItemCount] = useState(null) //handles decrement/increment items
  const [cartCount, setCartCount] = useOutletContext();

  const inputNumber = (e) => {
  if (e.target.value === "" || (e.target.value > 0 && e.target.value < 11)) {
    setItemCount(e.target.value);
  }
};

  const incrementItem = () => {
    if(itemCount<10) {
      setItemCount(Number(itemCount)+1)
    }
    
  }

  const decrementItem = () => {
    if (itemCount>1) {
      setItemCount(Number(itemCount)-1)
    }
   
  }

  const incrementCartCount = () => { //think about how add to cart can be handled with multiple carts
    if(itemCount)
    setCartCount(itemCount)
  }


  return (
    <>
      
      <div>
        <div>
          <div>
            {title}
          </div>
          <div className = "itemQuantityParent" >
            <button className="decrement" onClick = {decrementItem}>
              -
            </button>
            
            <input 
              type="number" 
              min="1"
              max="10"
              step="1"
              name="itemQuantity" 
              id="itemQuantity" 
              value = {itemCount}
              onChange = {inputNumber}
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

}

export default Shopping;


import {useState} from "react";
import React from "react";

// keep the add to cart component here



const CartButton = () => {
    //manage state of the count 
    const [count,setCount]=React.useState(0)
const handleClick=(value)=>{
    setCount(count+value)
}

  return (<>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
<<<<<<< HEAD
      <button onClick={()=>handleClick(-1)}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=>handleClick(1)}>+</button>
=======
      <button>-</button>
      {/* <p className="count-item">{count}</p> */}
      <button>+</button>
>>>>>>> fb1183de3dbf16e6bb11ba138f244c2e736a7ce7
  </div>
  </>
  )
};
export default CartButton

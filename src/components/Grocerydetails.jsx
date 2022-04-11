import React from "react";
import styles from './Container.module.css';
import data from '../data.json';
import CartButton from "./CartButton";

const container={
    display: "grid",
    // gridTemplateColumns: "repeat(3,400px)",
    gap: "30px",
    justifyContent: "space-evenly",
    border:"1px solid black",
    lineHeight:"0px"
}

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container" style={{...container}}>
            {/* map through the data and display the cards */}
            {
                data.map((elem)=>{
                    return(
                        <>
                        <img src={elem.imgURL}/>
                        <h6>{elem.title}</h6>
                        <p>{elem.sellingPrice}</p>
                        <del>{elem.mrp}</del>
                        <p>{elem.discount}</p>
                        <CartButton/>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export default GroceryDetails
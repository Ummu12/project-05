import React from "react";

export  const Product=({title, brand, price})=>{
    return(
      <div className="child">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{price}</p>

      </div>
    )
}
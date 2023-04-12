import React, { useState } from "react";

function Item({ name, category }) {

  const [ inCart, setInCart ] = useState( false )

  const cartBtnText = inCart ? "Remove From Cart" : "Add To Cart"

  
  function addToCart() {
    setInCart( !inCart )
  }
  
  const itemClass = inCart ? "in-cart" : ""
  
  const itemBtnColor = inCart ? "remove" : "add"

  return (
    <li className= { itemClass }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={ addToCart } className={itemBtnColor}>{ cartBtnText }</button>
    </li>
  );
}

export default Item;



import React from "react";
import {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState('false')

  const toggleCart = () =>
  {
    setInCart((inCart) => !inCart)
  }
  
  const cartClass = inCart ? 'in-cart' : 'add'

  return (
    <li className={inCart ? ''  : "in-cart"}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button
      className={inCart ? "add" : "remove"}
      onClick={toggleCart}
    >
      {inCart ? "Add to" : "Remove from"} Cart
    </button>
  </li>
  );
}

export default Item;

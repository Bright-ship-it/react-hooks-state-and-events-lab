
import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setToCart] = useState(false);
  function handleAdd(){
    setToCart (inCart => !inCart);

  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "in-cart remove" : "add"} onClick={handleAdd}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
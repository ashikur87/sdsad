import React from "react";
import "./Product.css";
const Product = ({ products,handleClick }) => {
  const { name, price, picture } = products;
  return (
    <div className="product">
      <img src={picture} alt="" href="" />
      <h3>Name:{name}</h3>
      <p>Price:{price}</p>
      <button onClick={()=>handleClick(products)} className="btn">Buy Now</button>
    </div>
  );
};

export default Product;

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import "./Home.css";
import Cart from "../Cart/Cart";
const Home = () => {
  const tshirts = useLoaderData();
  // console.log(tshirts);
  const [cart, setCart] = useState([]);
  const handleClick = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      alert("already exist");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
    // console.log(tshirt);
  };
  const handleRemove = (id) => {
    const rest = cart.filter((ts) => ts._id !== id);
    setCart(rest);
  };
  return (
    <div>
      <h1>Total Number of Products:{tshirts.length}</h1>
      <div className="product-container">
        <div className="products">
          {tshirts.map((products) => (
            <Product
              key={tshirts._id}
              handleClick={handleClick}
              products={products}
            ></Product>
          ))}
        </div>
        <div className="cart">
          <Cart cart={cart} handleRemove={handleRemove}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;

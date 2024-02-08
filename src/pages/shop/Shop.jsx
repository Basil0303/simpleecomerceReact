import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <h1>Highrich Shop</h1>
      <div className="shopTitle"></div>
      <div className="products">
        {""}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

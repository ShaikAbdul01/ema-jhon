import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { img, name, price, quantity, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" srcset="" />
      <div className="product-info">
        <h6 className="title">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} Star</p>
      </div>
      <button className="btn-cart">Add to Cart
      </button>
    </div>
  );
};

export default Product;

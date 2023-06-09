import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = ({ cart, handleClearCart, children }) => {
  //   console.log(cart);
  let total = 0;
  let shippingTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total += product.price * quantity;
    shippingTotal += product.shipping;
    quantity += product.quantity;
  }

  const tax = (total * 7) / 100;
  const grandTotal = total + tax + shippingTotal;
  return (
    <div className="cart">
      <h2>Cart Summary</h2>
      <p>Cart Selector: {quantity}</p>
      <p>Total Price: ${total} </p>
      <p>Shipping Charge: ${shippingTotal}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button onClick={handleClearCart} className="btn-clear">
        <span>Clear Cart </span>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      {children}
    </div>
  );
};

export default Cart;

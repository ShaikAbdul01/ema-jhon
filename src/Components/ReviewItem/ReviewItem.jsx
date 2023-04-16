import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./reviewItem.css";
const ReviewItem = ({ product, removeCart }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="reviewItem">
      <div className="">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="review-details">
        <p className="title">{name}</p>
        <p>
          Price: <span>$</span> {price}
        </p>
        <p>
          Shipping Charge: <span>$</span>
          {quantity}
        </p>
      </div>
      <button onClick={() => removeCart(id)} className="btn-delete">
        {" "}
        <FontAwesomeIcon className="delete" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviewItem;

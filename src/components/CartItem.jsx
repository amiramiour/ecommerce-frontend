import React from "react";
import "./../styles/CartItem.css";  

const CartItem = ({ image, title, price, quantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={title} />
      </div>
      <div className="cart-item-details">
        <h4>{title}</h4>
        <p>${price} x {quantity}</p>
      </div>
      <button className="suppression-button">Supprimer</button>

    </div>
  );
};

export default CartItem;

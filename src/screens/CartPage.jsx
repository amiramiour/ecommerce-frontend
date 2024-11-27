import React, { useState } from "react";
import CartItem from "../components/CartItem";
import "./../styles/CartPage.css";  // Optional: add styles for CartPage
import HoodieImage from "../assets/images/hoodie.jpeg";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      image: HoodieImage,
      title: "Hoodie Comfort",
      price: "35.00",
      quantity: 1,
    },
    {
      image: HoodieImage,
      title: "Jeans Classic",
      price: "40.00",
      quantity: 2,
    },
  ]);

  const handleCheckout = () => {
    // Logic for checkout (You can handle this as you wish)
    alert("Proceeding to checkout...");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-content">
        <h1>Your Shopping Cart</h1>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="cart-summary">
          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          <button onClick={handleCheckout} className="checkout-button">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

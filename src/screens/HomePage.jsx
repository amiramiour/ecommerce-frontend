import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import "./../styles/HomePage.css";

import HoodieImage from "../assets/images/hoodie.jpeg";

const HomePage = () => {
  const products = [
    {
      image: HoodieImage,
      title: "T-Shirt ",
      price: "20.00",
      tags: ["Hot", "Sale"],
    },
    {
      image: HoodieImage,
      title: "Hoodie ",
      price: "45.00",
      tags: ["Best Choice"],
    },
    {
      image: HoodieImage,
      title: "Jeans ",
      price: "50.00",
      tags: ["New"],
    },
    {
      image: HoodieImage,
      title: "Jacket ",
      price: "100.00",
      tags: ["Hot", "Sale"],
    },
  ];

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Explore Our Clothing Collection</h1>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              tags={product.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

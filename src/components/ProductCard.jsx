import React from "react";
import { Link } from "react-router-dom";
import "./../styles/productCard.css";

const ProductCard = ({ id, image, title, price, tags }) => {
  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
          <div className="product-tags">
            {tags?.map((tag, index) => (
              <span key={index} className={`product-tag ${tag.toLowerCase()}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <div className="product-prices">
            <span className="product-price">${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

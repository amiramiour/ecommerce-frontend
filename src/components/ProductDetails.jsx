import React from "react";
import { useParams } from "react-router-dom";
import "./../styles/ProductDetails.css";
import HoodieImage from "../assets/images/hoodie.jpeg";

const ProductDetails = () => {
  const { id } = useParams(); // Récupérer l'ID du produit à partir de l'URL
  const product = {
    id: "1",
    image: HoodieImage,
    title: "Hoodie",
    price: "25.00",
    tags: ["Hot", "Sale"],
    description: `This vintage T-shirt is crafted from high-quality cotton, providing
    ultimate comfort and style. Perfect for casual outings.`,
    characteristics: {
      Brand: "FashionHub",
      Material: "100% Cotton",
      Sizes: ["S", "M", "L", "XL"],
      Weight: "0.3kg",
    },
  };

  return (
    <div className="product-details-page">
      <div className="product-details-header">
        <h1>{product.title}</h1>
        <div className="product-tags1">
          {product.tags.map((tag, index) => (
            <span key={index} className={`product-tag1 ${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="product-details-content">
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.title}
            className="product-details-image"
          />
        </div>
        <div className="product-info-section">
          <h2>${product.price}</h2>
          <p className="product-description">{product.description}</p>

          <h3>Available Sizes:</h3>
          <div className="product-sizes">
            {product.characteristics.Sizes.map((size) => (
              <button key={size} className="size-button">
                {size}
              </button>
            ))}
          </div>

          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>

      <div className="product-characteristics">
        <h3>Product Characteristics</h3>
        <ul>
          {Object.entries(product.characteristics).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value.toString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useState } from "react";
import "../styles/ProductManagement.css";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 20.0,
      category_id: 1,
      size_id: 2,
      color_id: 3,
      availability: true,
      stock: 100,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category_id: "",
    size_id: "",
    color_id: "",
    stock: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, name: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({
      name: "",
      price: "",
      category_id: "",
      size_id: "",
      color_id: "",
      stock: "",
    });
  };

  return (
    <div className="product-management">
      <h2>Manage Products</h2>
      <form className="product-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="category"
          placeholder="Category ID"
          value={newProduct.category_id}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="size"
          placeholder="Size ID"
          value={newProduct.size_id}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="color"
          placeholder="Color ID"
          value={newProduct.color_id}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
      <div className="product-list">
        <h3>Existing Products</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price} (Stock: {product.stock})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;

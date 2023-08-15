// ProductForm.js
import React, { useState, useEffect } from 'react';

const ProductForm = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Food');
  const [products, setProducts] = useState({ Food: [], Skincare: [], Electronics: [] });

  useEffect(() => {
    // Load data from local storage if available
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever products change
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { productId, productName, price };

    setProducts((prevProducts) => ({
      ...prevProducts,
      [category]: [...prevProducts[category], newProduct],
    }));

    setProductId('');
    setProductName('');
    setPrice('');
  };

  const handleRemove = (category, index) => {
    setProducts((prevProducts) => {
      const updatedCategory = prevProducts[category].filter((_, i) => i !== index);
      return { ...prevProducts, [category]: updatedCategory };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
        </label>
        <br />
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Skincare">Skincare</option>
            <option value="Electronics">Electronics</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
      <div>
        {Object.keys(products).map((cat) => (
          <div key={cat}>
            <h2>{cat}:</h2>
            <ul>
              {products[cat].map((product, index) => (
                <li key={index}>
                  {product.productName} - ${product.price}
                  <button onClick={() => handleRemove(cat, index)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductForm;

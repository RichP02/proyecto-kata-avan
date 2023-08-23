import React, { useState, useEffect } from 'react';
import './Products.css'; // Asegúrate de tener un archivo Products.css en la misma ubicación

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h2>{product.product_name}</h2>
            <img src={product.image} alt={product.product_name} />
            <p>$ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

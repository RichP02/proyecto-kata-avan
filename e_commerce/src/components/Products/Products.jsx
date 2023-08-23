import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Lista de Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.product_name}</h2>
            <p>Precio: {product.price}</p>
            <img src={product.image} alt={product.product_name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products

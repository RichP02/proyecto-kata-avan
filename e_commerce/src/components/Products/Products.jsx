import React, { useState, useEffect } from 'react';
import './Products.css';
import ProductDetail from '../ProductsDetail/ProductsDetail';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleProductClick = product => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <h1>Productos</h1>
      <div className="product-container">
        {products.map(product => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            <h2>{product.product_name}</h2>
            <img src={product.image} alt={product.product_name} />
            <p>$ {product.price}</p>
          </div>
        ))}
      </div>
      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup">
            <ProductDetail product={selectedProduct} />
            <button onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;

import React from 'react';
import './productsdetail.css';

function ProductDetail({ product }) {
  return (
    <div className="product-detail">
    <img src={product.image} alt={product.product_name} />
    <div className="product-detail-content">
      <h2>{product.product_name}</h2>
      <div>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
      </div>
    </div>
  </div>
  );
}

export default ProductDetail;

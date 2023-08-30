import React from 'react';
import './productsdetail.css';
 
function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <h2>{product.product_name}</h2>
      <img src={product.image} alt={product.product_name} />
      <p>{product.description}</p>
      <p>$ {product.price}</p>
    </div>
  );
}

export default ProductDetail;

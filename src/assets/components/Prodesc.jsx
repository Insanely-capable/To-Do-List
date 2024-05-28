// src/assets/components/Prodesc.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

function Prodesc() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(result => setProduct(result));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Price: </strong>${product.price}</p>
      <button>Add To Cart</button>
    </div>
  );
}

export default Prodesc;

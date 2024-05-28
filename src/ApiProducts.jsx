// src/ApiProducts.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/components/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ApiProducts() {
  // document.body.style = "height: 100%";
  
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(products.length> 0 )   document.body.style = "height: 100%";
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(result => setProducts(result));
  }, []);

  function handleProductClick(product) {
    navigate(`/product/${product.id}`);
  }
  function handleAddToCart(event) {
    event.stopPropagation();
    setCartCount(cartCount + 1);
  }
  return (
    <>
      <main>
      <nav>
        <div className="nav-cart">
          <p><strong>Cart&nbsp;</strong><FontAwesomeIcon icon={faCartShopping} />&nbsp;<span className="cart-count">{cartCount}</span></p>
        </div>
      </nav>
        <h2>FREE KA MAAL</h2>
        <div className="products">
          {products.map((product, index) => (
            <div key={index} className="product" onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <button onClick={handleAddToCart}>Add To Cart</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default ApiProducts;


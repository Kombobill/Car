import React, { useState } from 'react';
import axios from 'axios';

const BuyPage = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  const handlePurchase = () => {
    // Example of sending a POST request to the backend to purchase the product
    axios.post('/api/purchase', { product, quantity })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage('Error purchasing product. Please try again.');
      });
  };

  return (
    <div>
      <h1>Buy Page</h1>
      <label>
        Product:
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <button onClick={handlePurchase}>Purchase</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BuyPage;

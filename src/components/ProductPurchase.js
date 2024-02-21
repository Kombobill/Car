import React, { useState } from 'react';
import axios from 'axios';

const ProductPurchase = () => {
  const [purchaseData, setPurchaseData] = useState({
    productId: '',
    quantity: 1,
    // Add more fields as needed
  });

  const handlePurchase = async () => {
    try {
      const response = await axios.post('/api/purchase', purchaseData);
      console.log('Purchase successful:', response.data);
      // Handle success, update UI, etc.
    } catch (error) {
      console.error('Error purchasing product:', error);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div>
      <h2>Purchase Product</h2>
      <form onSubmit={handlePurchase}>
        <label>
          Product ID:
          <input
            type="text"
            value={purchaseData.productId}
            onChange={(e) =>
              setPurchaseData({ ...purchaseData, productId: e.target.value })
            }
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={purchaseData.quantity}
            onChange={(e) =>
              setPurchaseData({ ...purchaseData, quantity: e.target.value })
            }
          />
        </label>
        <button type="submit">Purchase</button>
      </form>
    </div>
  );
};

export default ProductPurchase;

import React, { useState } from 'react';
import './Buy.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import AuthenticatedRoutes from './AuthenticatedRoutes';
// import Wallet from './Wallet';

function Buy({ isAuthenticated }) {
  const [items, setItems] = useState([
    { product: 'PayPal Accounts', priceUSD: 100, quantity: 0 },
    { product: 'Credit Cards', priceUSD: 80, quantity: 0 },
    { product: 'Binary Bots', priceUSD: 50, quantity: 0 },
    { product: 'Gift Cards', priceUSD: 20, quantity: 0 },
    { product: 'eBay Accounts', priceUSD: 60, quantity: 0 },
  ]);

  const bitcoinToUSDConversionRate = 0.00287; // Set your Bitcoin to USD conversion rate
  const [showWalletAddress, setShowWalletAddress] = useState(false);
  const navigate = useNavigate();

  const calculateTotal = () => {
    let totalUSD = 0;
    items.forEach((item) => {
      totalUSD += item.priceUSD * item.quantity;
    });
    const totalBitcoin = totalUSD * bitcoinToUSDConversionRate;
    return { totalUSD, totalBitcoin };
  };
 
  const handlePurchase = () => {
    // Allow the purchase logic here
    // You can send an API request to complete the purchase
    // Example API request:
   
    axios.post('/api/purchase', {
      items,
      totalCostUSD: calculateTotal().totalUSD,
    }).then((response) => {
      // Handle the response from the server, e.g., show a success message
    }).catch((error) => {
      // Handle errors, e.g., show an error message
    });
  };

  const handleBuyAsGuest = () => {
    setShowWalletAddress((prev) => !prev);
    

    navigate('/wallet')
  
  

  };


  return (
    <div className="">
      <h1>Product Purchase</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price (USD)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>${item.priceUSD} = {item.priceUSD * bitcoinToUSDConversionRate} B</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[index].quantity = parseInt(e.target.value, 10);
                    setItems(newItems);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total Cost: ${calculateTotal().totalUSD} = {calculateTotal().totalBitcoin} B</p>
        {!isAuthenticated && showWalletAddress &&
        (
          <div>
            {/* container for wallet address*/}
            <label>Enter wallet Address:</label>
            <input type="text" placeholder="WalletAddress"/>
          </div>  
        )}
        {!isAuthenticated && (
          <>
          <button onClick={handleBuyAsGuest}>Buy</button>
          </>
        )}
         
      </div>
    </div>
  );
}

export default Buy;

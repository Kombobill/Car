import React, { useState } from 'react';
import axios from 'axios';  // Import axios for making HTTP requests

const Wallet = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const handleSendCoins = () => {
    // Perform logic to send bitcoins by making a request to your Rails backend
    axios.post('http://localhost:3000/api/bitcoin/send_coins', {
      amount,
      recipient,
    })
      .then(response => {
        // Handle the response from the backend
        setTransactionStatus(response.data.message);
      })
      .catch(error => {
        // Handle errors
        console.error('Error sending bitcoins:', error);
        setTransactionStatus('Transaction failed. Please try again.');
      });
  };

  return (
    <div>
      <h1>Bitcoin Wallet</h1>
      <form>
        <label>
          Amount (BTC):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Recipient's Username:
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="button" onClick={handleSendCoins}>
          Send Bitcoins
        </button>
      </form>
      {transactionStatus && <p>{transactionStatus}</p>}
    </div>
  );
};

export default Wallet;

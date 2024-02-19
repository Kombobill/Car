// WalletPage.js
import React from 'react';

const WalletPage = () => {
  return (
    <div>
      <h1>Send Bitcoin Payment</h1>
      <p>Please send your payment to the following Bitcoin address:</p>
      <p id="bitcoin-address">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
      <button id="copy-button">Copy Address</button>
    </div>
  );
};

export default WalletPage;


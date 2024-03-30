import React, { useState, useEffect } from 'react';

const WalletPage = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const bitcoinAddress = '1L5yYY6cxeHAEhZLa1Tj3ysdY3itCkdSLG';

  useEffect(() => {
    // Check if the 'paymentConfirmed' cookie exists
    const paymentConfirmed = localStorage.getItem('paymentConfirmed');

    if (!paymentConfirmed) {
      // If the 'paymentConfirmed' cookie doesn't exist, display the message
      setMessage('Please use your own Bitcoin wallet to send the payment.');
    }
  }, []);

  const handleCopyAddress = () => {
    // Copy address to clipboard
    navigator.clipboard.writeText(bitcoinAddress)
      .then(() => {
        // Display notification
        if ('Notification' in window) {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              new Notification('Bitcoin Address Copied', {
                body: '',
              });
            }
          });
        }

        // Set message and update 'paymentConfirmed' cookie
        setMessage('Bitcoin address copied to clipboard!');
        localStorage.setItem('paymentConfirmed', 'true');
      })
      .catch((error) => console.error('Error copying address to clipboard:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, you can set 'submitted' state to true
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Send Bitcoin Payment</h1>
      <p>Please send your payment to the following Bitcoin address:</p>
      <p id="bitcoin-address">{bitcoinAddress}</p>
      <button id="copy-button" onClick={handleCopyAddress}>Copy Address</button>
      <div>
        {/* Display the message in the container box */}
        {!submitted && message && (
          <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
            <p>{message}</p>
          </div>
        )}
      </div>
      <div>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>
              Message:
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>Thank you for your payment confirmation!</p>
            <p>Message: {message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletPage;

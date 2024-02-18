import React from 'react';


const Dashboard = ({ numberOfPurchases, totalAmountNeeded }) => {
  return (
    <div className="dashboard-box">
      <h1>Dashboard</h1>
      <div className="dashboard-info">
        <p>Number of Purchases: {numberOfPurchases}</p>
        <p>Total Amount Needed: ${totalAmountNeeded}</p>
      </div>
    </div>
  );
};

export default Dashboard;



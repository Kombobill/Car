import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/Buy">Buy</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        {/* {isAuthenticated && ( */}
          {/* // Render these links only when the user is authenticated */}
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/wallet">Wallet</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </>
        {/* // )} */}
      </ul>
    </nav>
  );
};

export default Navbar;

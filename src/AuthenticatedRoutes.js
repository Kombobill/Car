// AuthenticatedRoutes.js

import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import Dashboard from './Dashboard';
import Wallet from './Wallet';
import Settings from './Settings';

const AuthenticatedRoutes = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AuthenticatedRoutes;

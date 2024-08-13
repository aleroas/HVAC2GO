// src/components/AuthComponent.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthComponent = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

export default AuthComponent;

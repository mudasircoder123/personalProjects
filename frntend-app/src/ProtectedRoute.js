
import React from 'react';
import { Navigate } from 'react-router-dom'; // Use Navigate to redirect if not authenticated

const ProtectedRoute = ({ children }) => {
  // Check if the token exists in localStorage (or your preferred auth state)
  const token = localStorage.getItem('token');

  if (!token) {
    // If there's no token, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If the token exists, render the children (the protected content)
  return children;
};

export default ProtectedRoute;

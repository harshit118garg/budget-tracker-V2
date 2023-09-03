import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useExpenseContext } from "../context/ExpenseContext";

const ProtectedRoute: React.FC<any> = () => {
  const { isLoggedIn } = useExpenseContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;

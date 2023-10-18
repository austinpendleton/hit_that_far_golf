import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  return (
    <Route {...props}>{isLoggedIn ? children : <Navigate to={"/"} />}</Route>
  );
}

export default ProtectedRoute;

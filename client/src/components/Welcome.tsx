import React from "react";
import { Link, Navigate } from "react-router-dom";
import { getCookie } from "../helpers/cookie";
import "./Welcome.css";

function Welcome() {
  const user = getCookie("login");
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="welcome">
      {user === "admin" && <Link to="/admin">admin</Link>}
      <h1 className="row align-items-center">Welcome</h1>
    </div>
  );
}

export default Welcome;

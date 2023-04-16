import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="header">
      <img src={logo} alt="" srcset="" />
      <div className="">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/Login">Login</Link>
        <Link to="/singup">Signup</Link>
        {user ? (
          <>
            <span className="text-white">{user.email}</span>
            <button onClick={handleLogOut} className="logout">Log Out</button>
          </>
        ) : (
          <Link to="/login">Log In</Link >
        )}
      </div>
    </nav>
  );
};

export default Header;

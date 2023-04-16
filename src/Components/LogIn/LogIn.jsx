import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
const LogIn = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
//   console.log(location);

  const from = location?.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
          <p onClick={()=>setShow(!show)}>
            {show ? <span>Hide Password</span> : <span>Show Password</span>}
          </p>
        </div>
        <input className=" login-btn" type="submit" value="Login" />
        <p className="account">
          New to Ema-john? <Link to="/singup">Create New Account</Link>
        </p>
        <p className="error">{error}</p>
      </form>
    </div>
  );
};

export default LogIn;

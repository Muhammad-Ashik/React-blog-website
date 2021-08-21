import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-head text-center">
        <h1 className="pb-5 login-title">LOG IN</h1>
        <h5 className="login-subtext font-weight-light mb-5">
          <span className="text-danger">Join Marooned</span> if you don't have
          an account yet
        </h5>
      </div>
      <form className="text-left login">
        <div className="form-group login-input">
          <label className="login-input-label" for="email">
            Email address
            <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group login-input">
          <label className="login-input-label" for="password">
            Password
            <span className="asterisk">*</span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="forget-password">
          <Link to="/">
            <p className="text-danger">Forgot your password?</p>
          </Link>
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
      </form>
    </>
  );
}

export default Login;

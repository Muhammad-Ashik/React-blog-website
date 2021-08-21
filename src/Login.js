import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function Login() {
  return (
    <>
      <div className="login-head text-center">
        <h1 className="pb-5 login-title">LOG IN</h1>
        <h5 className="login-subtext font-weight-light mb-5">
          <span>
            <Link className="text-danger" to="/signup">
              Join Marooned
            </Link>
            {` if you don't have an account yet`}
          </span>
        </h5>
      </div>
      <form className="text-left login">
        <Input
          text="Email address"
          helperText="We'll never share your email with anyone else."
        />
        <Input text="Password" />
        <div className="forget-password">
          <Link to="/">
            <p className="text-danger">Forgot your password?</p>
          </Link>
        </div>
        <Button text="LOGIN" />
        <div className="mb-5"></div>
      </form>
    </>
  );
}

export default Login;

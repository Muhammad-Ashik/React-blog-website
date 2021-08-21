import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function SignUp() {
  return (
    <>
      <div className="login-head text-center">
        <h4 className="login-subtext font-weight-light mb-5">
          Join the most energizing blog for developers from anywhere.
          <br />
          <br />
          <span className="text-danger">
            <Link className="text-danger" to="/login">
              Sign in
            </Link>
          </span>{" "}
          if you already have an account.
        </h4>
      </div>
      <form className="text-left login">
        <Input text="Full Name" />
        <Input
          text="Email address"
          helperText="We'll never share your email with anyone else."
        />
        <Input text="Password" />
        <Button text="GET STARTED" />
        <div className="forget-password mb-5">
          {`By creating an account, you agree to our `}
          <Link to="/">
            <span className="text-danger ">Privacy Policy</span>
          </Link>
          {`.`}
        </div>
      </form>
    </>
  );
}

export default SignUp;

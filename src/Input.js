import React from "react";

function Input({ text, helperText }) {
  return (
    <>
      <div className="form-group login-input">
        <label className="login-input-label" for={text}>
          {text}
          <span className="asterisk">*</span>
        </label>
        <input
          type={text}
          className="form-control"
          id={text}
          placeholder={`Enter Your ${text}`}
        />
        <small className="form-text text-muted">{helperText}</small>
      </div>
    </>
  );
}

export default Input;

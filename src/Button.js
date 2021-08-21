import React from "react";

function Button({ text }) {
  return (
    <div>
      <button type="submit" className="global-button">
        {text}
      </button>
    </div>
  );
}

export default Button;

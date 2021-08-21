import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-100 text-center">
      <div className="container-fluid footer">
        <p className="card-text">
          <small className="text-muted">
            {year} © All rights reserved. Muhammad Ashikuzzaman.
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

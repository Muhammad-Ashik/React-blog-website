import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container-fluid footer">
        <div className="text-white text-center">
          © {year} Muhammad Ashikuzzaman
        </div>
      </div>
    </footer>
  );
}

export default Footer;

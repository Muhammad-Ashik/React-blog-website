import React, { Component } from "react";
import "./style.css";
import TopPost from "./TopPost";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./NavBar.js";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TopPost />
        <Footer />
      </div>
    );
  }
}

export default App;

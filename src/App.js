import React, { Component } from "react";
import "./style.css";
import TopPost from "./TopPost";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./NavBar.js";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import SignUp from "./SignUp";
import FullPost from "./FullPost";

function Home() {
  return (
    <div>
      <Header />
      <TopPost />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="pt-3">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/post/:name" component={FullPost} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;

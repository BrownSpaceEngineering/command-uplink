import React, { Component } from "react";
import logo from "../assets/Images/logo.png";

// Header component
class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Command Uplink</h1>
      </header>
    );
  }
}

export default Header;

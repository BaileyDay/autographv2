import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery"
import "../css/navbar.css"
import "../css/dashBoard.css"



const DashBoard = () => {
  return (
      <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img  src="https://autographfarm.s3.us-east-2.amazonaws.com/logo.png" id="logo" />
    </a></div></nav>
    <div className="container dashContainer columns has-text-centered">
        <div className="column">
    <button class="button is-info">Accomplishments</button>
    </div>
    <div className="column">
    <button class="button is-info">Fun Times</button>
    </div>
    </div>
    </>
  );
};

export default DashBoard;

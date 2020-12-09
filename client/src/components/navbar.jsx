import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery"
import "../css/navbar.css"

// Hamburger menu functionality
$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img  src="https://autographfarm.s3.us-east-2.amazonaws.com/logo.png" id="logo" />
    </a>
    

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
        Home
      </a>

      <a className="navbar-item">
       Lessons
      </a>
      <a className="navbar-item">
       Boarding
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          About
        </a>

        <div className="navbar-dropdown">
          <a  href="/staff" className="navbar-item">
            Our Staff
          </a>
          <a className="navbar-item">
            Accomplishments
          </a>
          <a className="navbar-item">
            Fun Times
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
    
      <div className="navbar-item">
        <div className="buttons">
          
         
          <a className="button is-light" href="/login">
          <span className="icon">
      <i className="fas fa-sign-in-alt"></i>
    </span>
    <span></span>
            Log in
          </a>
          <div className="navbar-item navIcons">
    <a href="https://www.facebook.com/Autograph-Farm-LLC-108658054303892/" target="blank"><i className="fab fa-facebook fa-fw"></i></a>
    </div>
    <div className="navbar-item navIcons">
  <a href="https://www.instagram.com/autographfarmllc/?hl=en" target="blank"><i className="fab fa-instagram fa-fw"></i></a></div>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;

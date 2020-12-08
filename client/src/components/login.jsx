import React from "react";
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
    <h1>hello</h1>
  );
};

export default Navbar;
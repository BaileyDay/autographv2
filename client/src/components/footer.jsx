import React from "react";
import '../css/footer.css'

const Footer = () => {
  return (
<footer className="footer">
  <div className="content has-text-centered">
    <p>
      © 2020 AutoGraph Farm LLC
    </p>
  </div>
  <div className="content has-text-centered icons">
  <a href="https://www.facebook.com/Autograph-Farm-LLC-108658054303892/" target="blank"><i className="fab fa-facebook fa-fw"></i></a>
  <a href="https://www.instagram.com/autographfarmllc/?hl=en" target="blank"><i className="fab fa-instagram fa-fw"></i></a>
  </div>
</footer>
  );
};

export default Footer;

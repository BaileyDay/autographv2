import React from "react";
import '../css/footer.css'

const Footer = () => {
  return (
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      © 2020 AutoGraph Farm LLC
    </p>
  </div>
  <div className="content has-text-centered icons">
  <a href="https://www.facebook.com/Autograph-Farm-LLC-108658054303892/" target="blank"><i class="fab fa-facebook fa-fw"></i></a>
  <a href="https://www.instagram.com/autographfarmllc/?hl=en" target="blank"><i class="fab fa-instagram fa-fw"></i></a>
  </div>
</footer>
  );
};

export default Footer;

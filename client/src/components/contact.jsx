import React from "react";
import NavBar from './navbar'
import Footer from './footer'
import '../css/contact.css'

const Contact = () => {
  return (<>
      <NavBar/>
      <section class="contactHero hero  is-medium">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Contact us
      </h1>

    </div>
  </div>
</section>
<div className=" contactContainer">
    <div className="columns">
    <div className="column">
<h2 class="title is-2 mb-5">Join our Team!</h2>
<p className="subtitle is-size-5 contactSubtitle">Interested in lessons or boarding? Please call or text <strong>Juliana</strong> at <a href="tel:678-836-6990">678-836-6990</a></p> 
<h2 class="title is-2 mt-6">Connect with us! </h2>
<div className=" contactIcons is-size-1 has-text-black">
    <a href="https://www.facebook.com/Autograph-Farm-LLC-108658054303892/" target="blank"><i class="fab fa-facebook fa-fw"></i></a>
  <a href="https://www.instagram.com/autographfarmllc/?hl=en" target="blank"><i class="fab fa-instagram fa-fw"></i></a></div>
</div>


<div className="column">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.925190624842!2d-84.34416482210081!3d34.189145438602935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f57745501b11e9%3A0x22ce78e28db625df!2s3507%20Union%20Hill%20Rd%2C%20Alpharetta%2C%20GA%2030004!5e0!3m2!1sen!2sus!4v1607400917633!5m2!1sen!2sus"  height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
</div>
</div>

      <Footer/>
      </>

  );
};

export default Contact;
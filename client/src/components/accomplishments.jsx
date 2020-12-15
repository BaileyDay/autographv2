import React from "react";
import NavBar from './navbar'
import Footer from './footer'
import '../css/contact.css'

const Accomplishments = () => {
  return (<>
      <NavBar/>
      <section className="contactHero hero  is-medium">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Accomplishments
      </h1>

    </div>
  </div>
</section>

      <Footer/>
      </>

  );
};

export default Accomplishments;
import React from "react";
import NavBar from './navbar'
import Footer from './footer'
import '../css/boarding.css'

const Boarding = () => {
  return (
      <>
    <NavBar/>
    <section className="boardingHero hero  is-medium">
<div className="hero-body">
  <div className="container">
    <h1 className="title">
     Boarding
    </h1>

  </div>
</div>
</section>
<div className="is-flex is-justify-content-center">
<div className="contactButtonContainer has-text-centered">
          <a href="/contact" className="" target="_blank">
            Contact us about Boarding
          </a>
        </div>
        </div>
<div className="container">
      <div className="columns">
      <div className="column lessonsIMG">
              <img src="https://autographfarm.s3.us-east-2.amazonaws.com/Boarding/BoardingOne.95dc78b6.jpg" alt=""/>
          </div>
          <div className="column lessonsIMG">
              <img src="https://autographfarm.s3.us-east-2.amazonaws.com/Boarding/BoardingTwo.3ee6df3d.jpg" alt=""/>
          </div>
      </div>
      </div>
      <div className="container">
      <div className="columns">
          <div className="lessonsLeft column is-family-sans-serif">
              <p>We also emphasize horse care as an integral part of horsemanship. As such, we spend time on the fundamentals of horse care before and after lessons. We also provide opportunities outside of lessons for those wishing to further advance their horse-care skills.</p>
          </div>
          <div className="column lessonsIMG">
              <img src="https://autographfarm.s3.us-east-2.amazonaws.com/lessons03.jpeg" alt=""/>
          </div>
      </div>
      </div>
      <Footer/>
</>
  );
};

export default Boarding;
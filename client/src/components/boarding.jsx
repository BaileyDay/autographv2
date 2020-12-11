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
      <div className="container ">
      <p className="has-text-centered m-5">Our Barn is very reasonably sized so that we are able to care for each horses specific needs.</p>
      <div className="columns">
          <div className="lessonsLeft column is-family-sans-serif">
              <h2 className="title">Open Pastures</h2>
              <p>We have spacious grassy pastures that our horses are able to enjoy all day or night, depending on the season. We offer individual or small group turnout, and we supplement with hay throughout the winter.</p>
          </div>
          <div className="column lessonsIMG">
              <img src="https://autographfarm.s3.us-east-2.amazonaws.com/Boarding/pastures.ab0df118.jpg" alt=""/>
          </div>
      </div>
      <div className="columns">
      <div className="column lessonsIMG">
              <img src="https://autographfarm.s3.us-east-2.amazonaws.com/Boarding/Stalls.f4840443.jpg" alt=""/>
          </div>
          <div className="lessonsLeft column is-family-sans-serif">
              <h2 className="title">Spacious Stalls</h2>
              <p>We have large 12' x 14' stalls that are cleaned daily and heavily bedded at all times.</p>
          </div>
      </div>
      <div className="columns">
          <div className="lessonsLeft column is-family-sans-serif">
              <h2 className="title">Happy Horses</h2>
              <p>We offer four different types of grain, three different types of hay, and are happy to feed supplements to make sure every horses needs are met. We also have hay nets for every horse, to insure that they always have something to eat and occupy their time indoors.<br></br><br></br>

The barn owner lives on property and the barn manager lives less than 5 minutes away. The entire property is fenced in and gated to insure your horses safety.</p>
          </div>
          <div className="column lessonsIMG">
              <img src="https://autographfarm.s3.us-east-2.amazonaws.com/Boarding/pastures.ab0df118.jpg" alt=""/>
          </div>
      </div>
      </div>
      <Footer/>
</>
  );
};

export default Boarding;
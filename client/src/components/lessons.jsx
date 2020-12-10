import React from "react";
import NavBar from './navbar'
import Footer from './footer'
import '../css/lessons.css'

const Lessons = () => {
  return (
      <>
    <NavBar/>
    <section className="lessonsHero hero  is-medium">
<div className="hero-body">
  <div className="container">
    <h1 className="title">
     Lessons
    </h1>

  </div>
</div>
</section>
<div className="is-flex is-justify-content-center">
<div className="contactButtonContainer has-text-centered">
          <a href="/contact" className="" target="_blank">
            Contact us about Lessons
          </a>
        </div>
        </div>
<div className="container">
      <div className="columns">
          <div className="lessonsLeft column is-family-sans-serif">
              <p>At Autograph Farm we offer lessons for all levels of riders ages four and up. Whether you want to lesson just for fun or show at some of the top shows in the country, we can happily accommodate you!<br></br><br></br>

If you do not own a horse, no problem - we have eight sweet horses and ponies available for lessons at varying skill sets. Several of these are even leasable for shows. We offer group lessons for all ages, as well as private lessons for those preferring individual instruction.</p>
          </div>
          <div className="column lessonsIMG">
              <img src="https://autographfarm.s3.us-east-2.amazonaws.com/lessons01.jpeg" alt=""/>
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

export default Lessons;

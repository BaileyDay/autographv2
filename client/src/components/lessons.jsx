import React from "react";
import NavBar from './navbar'
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
      <div className="columns">
          <div className="column">
              <h1>Hello</h1>
          </div>
          <div className="column">
              <h1>Test</h1>
          </div>
      </div>
</>
  );
};

export default Lessons;

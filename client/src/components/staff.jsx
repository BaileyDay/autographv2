import React, { useEffect } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import '../css/staff.css'

const Staff = () => {
    useEffect(() => {
        const bulmaCollapsibleInstances = bulmaCollapsible.attach('.is-collapsible');

// Loop into instances
bulmaCollapsibleInstances.forEach(bulmaCollapsibleInstance => {
    // Check if current state is collapsed or not
    console.log(bulmaCollapsibleInstance.collapsed());
});
        });
  return (<>
      <NavBar/>
      <section className="staffHero hero  is-medium">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
       The Faces of Autograph Farm
      </h1>

    </div>
  </div>
</section>
<div className="staffContainer">
    <div className="columns">
    <div className="column">
    <div className="card staffCard">
  <div className="card-image">
    <figure className="image ">
      <img src="https://autographfarm.s3.us-east-2.amazonaws.com/profile+photos/jules.JPG" alt="Juliana"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4 ">Juliana Czekala</p>
        <p className="subtitle is-5">Head Trainer and Barn Manager</p>
      </div>
    </div>
  </div>
	<header className="card-header staffCardHeader">
		<p className="card-header-title ">
			Read Juliana's Bio
		</p>
		<a href="#collapsible-card" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
			<span className="icon">
				<i className="fas fa-angle-down" aria-hidden="true"></i>
			</span>
		</a>
	</header>
	<div id="collapsible-card" className="is-collapsible">
		<div className="card-content">
			<p className="title is-4 staffDesc">
            Juliana was raised around horses and has been riding for almost twenty years. First showing at age six, she went on to find success in hunters, jumpers, and equitation thanks to coaching from fantastic trainers such as Kim Land, Christina Schulchmier, Stacia Madden, Don Stewart, Sunny Stevens, Julie Mohr and several others. <br></br><br></br>Juliana also trained with and was mentored by Tim Sweat for the first three years of her professional career. She now thoroughly enjoys sharing her riding experience and love of horses with both kids and adults. She’s helped her students achieve a variety of goals, including winning championships at both the local and rated levels, and qualifying, riding, and winning at indoors. She has also ridden on and helped coach successful IEA teams across regional, zone, and national levels.<br></br><br></br>

Juliana also gets great satisfaction ensuring that the horses at her barn are getting top quality care in every aspect. She even enjoys the challenge of working with and rehabilitating “problem” horses. One of her specialties is thoroughbreds – she has trained several off-the-track thoroughbreds into new vocations as hunter jumpers. Working with horses is not only Juliana’s job, but also her lifelong passion.
			</p>
		</div>
		
	</div>
</div>
</div>
<div className="column">
    <div className="card staffCard">
  <div className="card-image">
    <figure className="image">
      <img src="https://autographfarm.s3.us-east-2.amazonaws.com/profile+photos/ava.jpeg 
      " alt="Ava"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4 ">Ava Daughters</p>
        <p className="subtitle is-5">Assistant Trainer</p>
      </div>
    </div>
  </div>
	<header className="card-header staffCardHeader">
		<p className="card-header-title ">
			Read Ava's Bio
		</p>
		<a href="#collapsible-card2" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
			<span className="icon">
				<i className="fas fa-angle-down" aria-hidden="true"></i>
			</span>
		</a>
	</header>
	<div id="collapsible-card2" className="is-collapsible">
		<div className="card-content">
			<p className="title is-4 staffDesc">
            Ava grew up riding horses from almost day one. She has shown successfully in equitation and hunters around Georgia and the Southeast. Ava has worked at multiple summer camps, teaching children fundamentals of riding and horsemanship, as she knows that the true "horse person" cultivates understanding and knowledge on and off the horse. Ava competed in IEA from 6th through 12th grade, qualifying for regional, zone and national competitions multiple times.<br></br><br></br> She captained her Pace Academy IEA team her junior and senior years of high school, deepening her leadership and instructional horse and people skills. Ava also, attends Georgia State University, and is currently majoring in business marketing. For her, the most satisfying part of coaching is seeing confidence grow and flourish in her students -- on and off the horse.
			</p>
		</div>
		
	</div>
</div>
</div>
</div>
</div>

      <Footer/>
      </>

  );
};

export default Staff;
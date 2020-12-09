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
<div className=" staffContainer">
    <div className="columns">
    <div className="column">
    <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://autographfarm.s3.us-east-2.amazonaws.com/profile+photos/jules.JPG" alt="Juliana"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4 ">Juliana Czkalala</p>
        <p class="subtitle is-5">Head Trainer and Barn Manager</p>
      </div>
    </div>
  </div>
	<header class="card-header staffCardHeader">
		<p class="card-header-title ">
			Read Juliana's Bio
		</p>
		<a href="#collapsible-card" data-action="collapse" class="card-header-icon is-hidden-fullscreen" aria-label="more options">
			<span class="icon">
				<i class="fas fa-angle-down" aria-hidden="true"></i>
			</span>
		</a>
	</header>
	<div id="collapsible-card" class="is-collapsible">
		<div class="card-content">
			<p class="title is-4">
            Juliana was raised around horses and has been riding for almost twenty years. First showing at age six, she went on to find success in hunters, jumpers, and equitation thanks to coaching from fantastic trainers such as Kim Land, Christina Schulchmier, Stacia Madden, Don Stewart, Sunny Stevens, Julie Mohr and several others. <br></br><br></br>Juliana also trained with and was mentored by Tim Sweat for the first three years of her professional career. She now thoroughly enjoys sharing her riding experience and love of horses with both kids and adults. She’s helped her students achieve a variety of goals, including winning championships at both the local and rated levels, and qualifying, riding, and winning at indoors. She has also ridden on and helped coach successful IEA teams across regional, zone, and national levels.<br></br><br></br>

Juliana also gets great satisfaction ensuring that the horses at her barn are getting top quality care in every aspect. She even enjoys the challenge of working with and rehabilitating “problem” horses. One of her specialties is thoroughbreds – she has trained several off-the-track thoroughbreds into new vocations as hunter jumpers. Working with horses is not only Juliana’s job, but also her lifelong passion.
			</p>
		</div>
		
	</div>
</div>
</div>

<div className="column">
</div>
</div>
</div>

      <Footer/>
      </>

  );
};

export default Staff;
import React, { useEffect } from 'react';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import "../css/carousel.css"




const Carousel = () => {
    useEffect(() => {
        bulmaCarousel.attach('#carousel', {
            slidesToScroll: 1,
            slidesToShow: 1,
            loop: true
        });
      });
  return (
    <section className="hero is-medium has-carousel">
			<div id="carousel" className="hero-carousel">
				<div className="item-1">
					<img src="https://autographfarm.s3.us-east-2.amazonaws.com/Carousel/carousel-7.JPG" alt="" id="carouselPicture"/>
				</div>
				<div className="item-2">
					<img src="https://autographfarm.s3.us-east-2.amazonaws.com/Carousel/carousel-1.png" alt="" id="carouselPicture"/>
				</div>
				<div className="item-3">
					<img src="https://autographfarm.s3.us-east-2.amazonaws.com/Carousel/carousel-2.png" alt="" id="carouselPicture"/>
				</div>
                <div className="item-3">
					<img src="https://autographfarm.s3.us-east-2.amazonaws.com/Carousel/carousel-3.png" alt="" id="carouselPicture"/>
				</div>
                <div className="item-3">
					<img src="https://autographfarm.s3.us-east-2.amazonaws.com/Carousel/carousel-4.png" alt="" id="carouselPicture"/>
				</div>
                <div className="item-3">
					<img src="https://autographfarm.s3.us-east-2.amazonaws.com/Carousel/carousel-6.png" alt="" id="carouselPicture"/>
				</div>
			</div>
			<div className="hero-head"></div>
			<div className="hero-body"></div>
			<div classNameName="hero-foot"></div>
		</section>
  );
};

export default Carousel;
import React, { useEffect } from 'react';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import "../css/carousel.css"




const Carousel = () => {
    useEffect(() => {
        bulmaCarousel.attach('#carousel', {
			initialSlide: 0,
		  slidesToScroll: 1,
		  slidesToShow: 1,
		
		  navigation: true,
		  navigationKeys: true,
		  navigationSwipe: true,
		
		  pagination: true,
		
		  loop: true,
		  infinite: false,
		
		  effect: 'translate',
		  duration: 300,
		  timing: 'ease',
		
		  autoplay: false,
		  autoplaySpeed: 3000,
		  pauseOnHover: true,
		  breakpoints: [{
			  changePoint: 480,
			  slidesToShow: 1,
			  slidesToScroll: 1
			},
			{
			  changePoint: 640,
			  slidesToShow: 1,
			  slidesToScroll: 1
			},
			{
			  changePoint: 768,
			  slidesToShow: 1,
			  slidesToScroll: 1
			},
			{
				changePoint: 1500,
				slidesToShow: 1,
				slidesToScroll: 1
			  },
			  {
				changePoint: 2500,
				slidesToShow: 3,
				slidesToScroll: 3
			  }
		  ]
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
			<div className="hero-foot"></div>
		</section>
  );
};

export default Carousel;
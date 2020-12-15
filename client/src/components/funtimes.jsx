import React, { useEffect, useState } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import axios from 'axios'
import '../css/funtimes.css'

const FunTimes = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages2()
      }, []);

      const getImages2 = () => {
        axios.get("/api/images2").then((result) => setImages(result.data))
    }
  return (<>
      <NavBar/>
      <section className="funHero hero  is-medium">
  <div className="hero-body">
    <div className="container">
      <h1 className="title is-3 ">
        Fun Times
      </h1>

    </div>
  </div>
</section>

{images && 
          <div className="dashImageContainer">
            {images.map((image) => (
              <div className="card frontPageImages" key={image._id} >
              <div className="card-image">
                <figure className="image  dashImage ">
                  <img src={image.path} alt="Placeholder image"/>
                </figure>
              </div>
        
            </div>
            ))}
          </div>
        }

      <Footer/>
      </>

  );
};

export default FunTimes;
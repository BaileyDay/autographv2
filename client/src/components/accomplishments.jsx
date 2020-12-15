import React, { useEffect, useState } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import axios from 'axios'
import '../css/accomplishments.css'

const Accomplishments = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages1()
      }, []);

      const getImages1 = () => {
        axios.get("/api/images").then((result) => setImages(result.data))
    }
  return (<>
      <NavBar/>
      <section className="accomplishmentsHero hero  is-medium">
  <div className="hero-body">
    <div className="container">
      <h1 className="title is-3 ">
        Accomplishments
      </h1>

    </div>
  </div>
</section>

{images && 
          <div className="dashImageContainer">
            {images.map((image) => (
              <div className="card" key={image._id} >
              <div className="card-image">
                <figure className="image is-4by3 dashImage frontPageImages">
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

export default Accomplishments;
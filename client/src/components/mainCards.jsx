import React, { useEffect } from 'react';
import '../css/maincard.css'


const MainCards = () => {
  return (
      <>
      <div className="is-justify-content-center columns">
    <div className="card column">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src="https://autographfarm.s3.us-east-2.amazonaws.com/MainCards/LaidBack.png" alt="Laid back horses"/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
        </div>
        <div className="media-content">
          <p className="title is-4">Laid Back Enviroment</p>
          
        </div>
      </div>
  
      <div className="content">
      Small 9 stall barn with tons of pasture space, located in Alpharetta, Georgia. We offer two arenas, plenty of room to ride around the property, and we are only 5 minutes away from the 200 acres of trails in Birmingham Park.
      </div>
    </div>
  </div>
  <div className="card column">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://autographfarm.s3.us-east-2.amazonaws.com/MainCards/premium.JPG" alt="Premium horse boarding"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">Premium Boarding</p>
      </div>
    </div>

    <div className="content">
    At Autograph Farm we put the horses first. Each horse is cared for as if it were our own. Every stall in the barn is oversized, matted, and heavily bedded. We feed four types of premium grain to tailor to your horses individual needs. We also feed the best quality hay you can find, which the horses are given throughout the day. Our stalls are cleaned daily, and we turn out all night or day depending on the season.
    </div>
  </div>
</div>
<div className="card column">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://autographfarm.s3.us-east-2.amazonaws.com/MainCards/lessonscard.png" alt="Horse Lessons Image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">Personalized Lessons</p>
       
      </div>
    </div>

    <div className="content">
    We have two very kind, passionate, and experienced instructors who truly care about both horse and rider. If you do not have your own horse, that is not a problem. We have 8 lesson horses and ponies for riders of every level.
      <br/>
    </div>
  </div>
</div>
</div>
</>
  );
};

export default MainCards;


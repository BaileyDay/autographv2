import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import $, { data } from "jquery"
import "../css/navbar.css"
import "../css/dashBoard.css"
import axios from 'axios'



const DashBoard = () => {
    const [images, setImages] = useState([]);
    const [value, setValue] = useState(0); // integer state
    const [pageSelect, setPageSelect] = useState("");
    const [loading, setLoading] = useState("file-label control");
    const [isDisabled, setIsDisabled] = useState(false);
    
    
    function useForceUpdate(){
        return () => setValue(value => ++value); // update the state to force render
    }
    
    const getImages = () => {
        axios.get("/api/images").then((result) => setImages(result.data))
        useForceUpdate()
    }

    console.log(images)
    useEffect(() => {
        getImages()
      }, []);
  return (
      <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img  src="https://autographfarm.s3.us-east-2.amazonaws.com/logo.png" id="logodash" />
    </a></div></nav>
    <div className="container dashContainer columns has-text-centered">
        <div className="column">
    <button className="button is-info">Accomplishments</button>
    </div>
    <div className="column">
    <button className="button is-info">Fun Times</button>
    </div>
    </div>
    <div className="fileContainer">
    <div className="file">
  <label className={loading}>
    <input className="file-input is-" type="file" name="image" onChange={ async (e) => {
        setLoading("file-label control is-loading is-static")
        setIsDisabled(true)
        const data = new FormData();
        const file = e.target.files[0];
        data.append("image", file); 
        if(file){
        axios({
            method: 'post',
            url: '/api/images',
            data: data,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then((result) =>{ 
            if(result.status === 200){
                getImages()
                setLoading('"file-label control"')
                setIsDisabled(false)
            }
        })} else { 
            setLoading('"file-label control"')
            setIsDisabled(false)
        }
}} disabled={isDisabled}/>

    <span className="file-cta">
      <span className="file-icon">
        <i className="fas fa-upload"></i>
      </span>
      <span className="file-label">
        Upload Image
      </span>
    </span>
  </label>
</div>
    </div>
   <div className="container">
   {images && 
          <div className="dashImageContainer">
            {images.map((image, id) => (
              <div className="card" key={id}>
              <div className="card-image">
                <figure className="image is-4by3 dashImage">
                  <img src={image.path} alt="Placeholder image"/>
                </figure>
              </div>
              <footer className="card-footer">
    <a href="#" className="card-footer-item button is-danger">Delete</a>
  </footer>

            
                
              
            </div>
            ))}
          </div>
        }
   </div>
    </>
  );
};

export default DashBoard;

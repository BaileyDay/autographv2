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
    const [gallery, setGallery] = useState("accomplishments");
    
    const handleDelete = (id, awsKey) => {
        axios({
            method: 'delete',
            url: '/api/images',
            data: {
                id: id,
                awsKey: awsKey
            }
        }).then((result) =>{ 
            if(result.status === 200){
                getImages()
            }
        })} 

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
    <button className="button is-info" onClick={(e) => e.preventDefault + setGallery("accomplishments")}>Accomplishments</button>
    </div>
    <div className="column">
    <button className="button is-info" onClick={(e) => e.preventDefault + setGallery("funtimes")} >Fun Times</button>
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
        let galleryUrl = "/api/images"
        if(gallery === "accomplishments"){
            galleryUrl = "/api/images"
        }
        if(gallery === "funtimes"){
            galleryUrl = "/api/images2"
        }
        if(file){
        axios({
            method: 'post',
            url: galleryUrl,
            data: data,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then((result) =>{ 
            if(result.status === 200){
                getImages()
                setLoading('"file-label control"')
                setIsDisabled(false)
            }
            
        })} 
        else { 
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
   {images && gallery === "accomplishments" &&
          <div className="dashImageContainer">
            {images.map((image) => (
              <div className="card" key={image._id} >
              <div className="card-image">
                <figure className="image is-4by3 dashImage">
                  <img src={image.path} alt="Placeholder image"/>
                </figure>
              </div>
              <footer className="card-footer">
    <button type="button" className="card-footer-item button is-danger" onClick={(e) => {
        e.preventDefault();
        handleDelete(image._id, image.awsKey)}
        }>Delete</button>
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

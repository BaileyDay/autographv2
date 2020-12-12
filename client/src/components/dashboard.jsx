import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import $, { data } from "jquery"
import "../css/navbar.css"
import "../css/dashBoard.css"
import axios from 'axios'

const dirTree = require("directory-tree");
const tree = dirTree("../../");

console.log(tree)

const DashBoard = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get("/api/images").then((result) => setImages(result.data))
      }, []);
      console.log(images)
  return (
      <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img  src="https://autographfarm.s3.us-east-2.amazonaws.com/logo.png" id="logo" />
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
  <label className="file-label">
    <input className="file-input" type="file" name="image" onChange={(e) => {
        const data = new FormData();
        const file = e.target.files[0];
        data.append("image", file); 
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/images',
            data: data,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        });
}} />
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
          <div>
            {images.map((image, id) => (
              <div key={id}>
                  <img src={image.path} alt=""/>
              </div>
            ))}
          </div>
        }
   </div>
    </>
  );
};

export default DashBoard;

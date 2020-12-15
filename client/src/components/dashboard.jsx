import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import $, { data } from "jquery"
import "../css/navbar.css"
import "../css/dashBoard.css"
import axios from 'axios'
import { useStore } from "./store";
import { useHistory } from "react-router-dom";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

const DashBoard = () => {
    const [images, setImages] = useState([]);
    const [value, setValue] = useState(0); // integer state
    const [pageSelect, setPageSelect] = useState("");
    const [loading, setLoading] = useState("file-label control");
    const [isDisabled, setIsDisabled] = useState(false);
    const [gallery, setGallery] = useState("accomplish");
    const [galleryLink, setGalleryLink] = useState("/api/images");
    const { state, dispatch } = useStore();
    let history = useHistory();
    
    


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
                if (gallery === "accomplish"){
                    getImages1()
                }
                if (gallery === "funtimes"){
                    getImages2()
                }
            }
        })} 

    function useForceUpdate(){
        return () => setValue(value => ++value); // update the state to force render
    }

   
    const handleClick1 = () => {
        dispatch({
            type: "accomplishUrl"
        })
        getImages1()
    }
    const handleClick2 = () => {
        dispatch({
            type: "funtimesUrl"
        })
       getImages2()
        
    }

    const logout = () => {
        dispatch({
          type: "logout",
        });
        history.push("/login");
      };
    
   
    
    useEffect(() => {
        getImages1()
      }, []);
      const getImages1 = () => {
        axios.get("/api/images").then((result) => setImages(result.data))
    }
    const getImages2 = () => {
        axios.get("/api/images2").then((result) => setImages(result.data))
    }

 
  return (
      <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img  src="https://autographfarm.s3.us-east-2.amazonaws.com/logo.png" id="logodash" />
    </a></div></nav>
    <div className="container dashContainer columns has-text-centered">
    <a className="button is-danger" onClick={logout}>
          <span className="icon">
      <i className="fas fa-sign-in-alt"></i>
    </span>
    <span></span>
            Log Out
          </a>
        <div className="column">
    <button className="button is-info" onClick={(e) => e.preventDefault + handleClick1() + setGallery("accomplish")}>Accomplishments</button>
    </div>
    <div className="column">
    <button className="button is-info" onClick={(e) => e.preventDefault +handleClick2() + setGallery("funtimes") } >Fun Times</button>
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
            url: state.galleryUrl,
            data: data,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then((result) =>{ 
            if(result.status === 200){
                if (gallery === "accomplish"){
                    getImages1()
                }
                if (gallery === "funtimes"){
                    getImages2()
                }
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
   {images && gallery &&
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

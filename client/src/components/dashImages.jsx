import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import $, { data } from "jquery"
import "../css/navbar.css"
import "../css/dashBoard.css"
import axios from 'axios'


const dashImages = () => {
    return (
        <>
        <div>
        {images && 
            <div className="dashImageContainer">
              {images.map((image, id) => (
                <div class="card" key={id}>
                <div class="card-image">
                  <figure class="image is-4by3 dashImage">
                    <img src={image.path} alt="Placeholder image"/>
                  </figure>
                </div>
                <footer class="card-footer">
      <a href="#" class="card-footer-item button is-danger">Delete</a>
    </footer>
  
              
                  
                
              </div>
              ))}
            </div>
    }
    </div>
    )
    
    </>
}
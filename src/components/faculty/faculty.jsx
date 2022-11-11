import React, { Component,useEffect,useState } from 'react';
import Carousel from "react-multi-carousel";
import axios from 'axios';
import "./faculty.css"
const Faculty = () => {
    const [testimonial, setTestimonial] = useState([
        "assets/images/Computer.jpg","assets/images/Currunt Affaris.jpg","assets/images/English.jpg","assets/images/Maths.jpg","assets/images/Reasoning.jpg","assets/images/Sciece.jpg"
    ]);
 

  useEffect(() => {

  }, []);

  
    return ( <div className='row container-fluid'>
        <div className='col-12'  style={{marginTop:"8rem"}}>
        <div><h1 style={{color:"orangered"}}>Our Faculties </h1></div>
        <div id="carouselExampleFade" class="carousel slide " data-bs-ride="carousel">
        
  <div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="2000">
      <img style={{width:"100%",height:"36rem"}} src="assets/images/G.S..jpg" class="d-block " alt="..."/>
    </div>
    {testimonial.map(dt=><div class="carousel-item" data-bs-interval="2000">
      <img style={{width:"100%",height:"36rem"}} src={dt} class="d-block " alt="..."/>
    </div>)}
    
   
  </div>
  
  
</div>
        </div>
        </div> );
}
 
export default Faculty;
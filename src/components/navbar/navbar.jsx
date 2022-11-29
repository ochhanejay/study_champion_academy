import React, { Component } from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( <div classNameName=''style={{position:"absolute",width:"100%",overflowX:"hidden"}} >
    <nav className="navbar navbar-expand-lg bg-transparent text-danger">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img style={{width:"15rem",height:"8rem",zIndex:"1"}} src='assets/images/logo.png'></img></Link>
      <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white"></span>
      </button>
      <div className="collapse navbar-collapse navMargin" id="navbarSupportedContent" style={{}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-effect-neon">
          <li className="nav-item">
          <Link className="nav-link  active me-5  navLink navFont" to="/" style={{borderBottom:"1px solid red"}}>Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link me-5 navLink navFont" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link me-5 navLink navFont" to="/whyStudy">About Us</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link me-5  navLink navFont" to="/faculty">Faculty</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link me-5  navLink navFont" to="/courses">Courses</Link>
          </li>
          
        </ul>
       
      </div>
    </div>
  </nav>
        </div> );
}
 
export default Navbar;
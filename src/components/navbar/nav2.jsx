import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
export default function Navnew() {
  return (
    <div>
    <div class="container-fluid bg-transparent px-0 navPosition" style={{}}>
        <div class="row gx-0">
            <div class="col-lg-3 bg-transparent d-none d-lg-block">
                <a href="index.html" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                <img style={{width:"15rem",height:"8rem",zIndex:"1"}} src='assets/images/logo.png'></img>
                </a>
            </div>
            <div class="col-lg-7 offset-lg-2 ">
                
                <nav class="navPad navbar navbar-expand-lg bg-lg-transparent navbar-dark ps-3 pe-3 pb-0 h-100 p-lg-0 px-lg-5">
                <Link to="/" className="navbar-brand d-lg-none d-block navB"><img className='navB' style={{width:"15rem",height:"8rem"}} src='assets/images/logo.png'></img></Link>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0 font-effect-neon">
          <li className="nav-item">
          <Link className="nav-link me-5  navLink navFont" to="/">Home</Link>
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
            </div>
        </div>
    </div>
    </div>
  )
}

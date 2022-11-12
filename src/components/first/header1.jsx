import React, { Component ,useEffect,useState} from 'react';
import "./header1.css";
import Typewriter from './typewriter';

export default  function Head  ({text})  {
  

  return(<div className='row bgHeader1'>
  <div className='col-6'></div>
  <Typewriter style={{marginTop:"8rem !important",color:"black"}} text={"Weelcome To Study Champion Academy"}></Typewriter>
  </div>);
  
  
}
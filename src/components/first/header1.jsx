import React, { Component ,useEffect,useState} from 'react';
import "./header1.css";
import Typewriter from './typewriter';

export default  function Head  ({text})  {
 
  return(<div className='row bgHeader1'>

  <Typewriter style={{marginTop:"0rem !important"}} text={"Weelcome To Study Champion Academy"}></Typewriter>
  </div>);
  
  
}
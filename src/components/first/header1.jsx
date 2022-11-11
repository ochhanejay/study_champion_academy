import React, { Component ,useEffect,useState} from 'react';
import "./header1.css";
import Typist from "react-typist";
import Typewriter from './typewriter';

export default  function Head  ({text})  {
  

  return(<div className='row bgHeader1'>
  <Typewriter style={{marginTop:"8rem !important"}} text={"Weelcome to Study Champion Academy"}></Typewriter>
  </div>);
  
  
}
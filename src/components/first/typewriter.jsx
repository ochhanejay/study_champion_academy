import React, { Component ,useEffect,useState,useRef} from 'react';
import "./header1.css";
import Typist from "react-typist";

const Typewriter=  ({text})  =>{
    const index =useRef(0);
  const [currentText, setCurrentText] = useState("");
  useEffect(() => {
    setTimeout(()=>{
        setCurrentText((value)=> value+ text.charAt(index.current));
        index.current +=1;
    },200)
    
}, [currentText])

  return <h1 style={{width:"30rem",fontSize:"5rem",color:"white",textAlign:"start",marginTop:"10rem"}}>{currentText}</h1>
}
export default Typewriter;
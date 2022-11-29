import React, { Component ,useEffect,useState,useRef} from 'react';
import "./header1.css";

const Typewriter=  ({text})  =>{
    const index =useRef(0);
  const [currentText, setCurrentText] = useState("");
  useEffect(() => {
    setTimeout(()=>{
        setCurrentText((value)=> value+ text.charAt(index.current));
        index.current +=1;
    },200)
    
}, [currentText])

  return <h1 className='font-effect-fire headFont' style={{width:"25rem",fontSize:"4.7rem",color:"red",textAlign:"start",lineHeight:"8rem"}}>{currentText}</h1>
}
export default Typewriter;
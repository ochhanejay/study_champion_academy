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

  return <h1 className='font-effect-fire' style={{width:"30rem",fontSize:"5rem",color:"black",textAlign:"start",marginTop:"10rem",lineHeight:"8rem"}}>{currentText}</h1>
}
export default Typewriter;
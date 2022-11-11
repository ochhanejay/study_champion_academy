import React, { Component ,useState,useEffect} from 'react';
import "./courses.css";

const Course = () => {
    const[courses,setCourses]=useState([{
        name:"UPSC",
        image:"upsc.jpg",
        text:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
    },
    {
        name:"MPPSC",
        image:"mppsc.webp",
        text:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
    },
    {
        name:"CIVIL SERVICES",
        image:"civil.webp",
        text:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
    },
    {
        name:"SSC",
        image:"ssc.png",
        text:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
    },
    {
        name:"BANKING",
        image:"bank.png",
        text:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
    },
    {
        name:"VYAPAM",
        image:"peb.jpg",
        text:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
    }]);
    
   
    return ( <div className='bgCourse row'>
    <div className='' style={{marginTop:"8rem"}}>
    <h2 className='pt-5 mt5 text-danger'>COURSES</h2>
    </div>
    
    <div class="course_container container">
   
{
    courses.map(course=><div class="card puff-in-center">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="java">{course.name}</h2>
        <p class="java">{course.text}</p>
      </div>
    </div>
    <div class="face face2" style={{backgroundImage:`url(assets/images/${course.image})`,backgroundSize:"cover"}}>
  
    </div>
  </div>)
}
    
  </div>
        </div> );
}
 
export default Course;
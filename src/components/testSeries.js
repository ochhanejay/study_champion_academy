import React from 'react'

const TestSeries = () => {
  return (
    <div className='container'>
    <div className='row mb-5'>
    <center style={{marginTop:"7rem"}}><h1 className='text-primary mb-5 textFamily' > Online <span className='text-danger'>Test Series</span></h1></center>
    
    <div className='col-lg-6 col-xl-6 col-md-12'>
    <a href='https://sca.examest.in/'>
    <img className='testImage' src='assets/images/testSeries.jpg' style={{width:"75%",height:"100%"}}></img>
    </a>
    </div>
    <div className='col-lg-6 col-xl-6 col-md-12'>
    <h1 className='textCombo'>START YOUR TEST HERE</h1>
    <a href='https://sca.examest.in/'>
    <button class="glow-on-hover" type="button">START TEST!</button>
    </a>
    
    </div>
    
    </div>
    </div>
  )
}

export default TestSeries;
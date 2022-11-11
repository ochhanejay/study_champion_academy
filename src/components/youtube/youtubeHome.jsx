import YouTube from '@mui/icons-material/YouTube';
import React, { Component } from 'react';
import "./youtubeHome.css"
const YouHome = () => {
    return ( <div className='row youtubeHome'>
    <div className='col-lg-6'>
    <img style={{width:"50rem"}} src='assets/images/youtubeStudy.png'></img>
    </div>
  
    <div class="youtube-width col-lg-6">
<div class="youtube-container">
<iframe src="https://www.youtube.com/embed/FDmshWK3hPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

    </div>
    </div> );
}
 
export default YouHome;
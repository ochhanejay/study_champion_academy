import YouTube from '@mui/icons-material/YouTube';
import React, { Component } from 'react';
import "./youtubeHome.css"
const YouHome = () => {
    return (<div className='row youtubeHome'>
        <div className='col-12 mb-4'>
        <div className='row'>
            <h1 className=' font-effect-neon text-dark col-lg-4 mt-5 offset-lg-2'>Connect Us With</h1>
            <a href='https://www.youtube.com/c/StudyChampionAcademy' className='text-reset col-lg-1'>
            <img href="" className='youtube d-inline' src='assets/images/youtube.png'></img>
          </a>
          </div> 
        </div>
        <div className='col-lg-6'>
            <img className='youImage' src='assets/images/youtubeStudy.png'></img>
        </div>

        <div class="youtube-width col-lg-6">
            <div class="youtube-container">
                <iframe src="https://www.youtube.com/embed/FDmshWK3hPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    </div>);
}

export default YouHome;
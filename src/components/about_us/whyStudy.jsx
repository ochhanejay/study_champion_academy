import React, { Component,useState } from 'react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DescriptionIcon from '@mui/icons-material/Description';
import Groups2Icon from '@mui/icons-material/Groups2';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import WifiIcon from '@mui/icons-material/Wifi';
import SmsIcon from '@mui/icons-material/Sms';


const WhyStudy = () => {
    const [why,setWhy]=useState(
        
        
     
       [    
            ["Chapter-wise Advanced level assignment sheet based on the latest pattern",<LibraryBooksIcon></LibraryBooksIcon>],
            ["Unlimited online &amp; offline test series",<DescriptionIcon></DescriptionIcon>],
            ["Problem Solving and doubt clearing Session",<Groups2Icon></Groups2Icon>],
            ["weekly current affairs classes",<DesktopWindowsIcon></DesktopWindowsIcon>],
            ["Portal for current affairs and government job updates",<ContactMailIcon></ContactMailIcon>],
            ["Study on the go winners Android App",<SmartphoneIcon></SmartphoneIcon>],
            ["Library &amp; Self Study Facility",<AccountBalanceIcon></AccountBalanceIcon>],
            ["Special Classes and full-length test on Sunday (Result with ranking)",<ComputerIcon></ComputerIcon>],
            ["Best &amp; Experienced Faculty Team",<GroupAddIcon></GroupAddIcon>],
            ["Monthly Current Affairs Notes",<FilePresentIcon></FilePresentIcon>],
            ["Video Lectures and Projector Classes",<VideocamIcon></VideocamIcon>],
            ["Fully Wi-Fi Campus",<WifiIcon></WifiIcon>],
            ["SMS Alert and updates",<SmsIcon></SmsIcon>],
        ]
        
    )
    return ( <div className='row '>
    
    <div className='col-12' style={{marginTop:"9rem"}}>
    <img src='assets/images/about-post.jpg' style={{width:"80%",height:"20rem"}}></img>
    <div className='row'>
    <div className='col-lg-6 col-sm-12 mt-5'>
    
    <h2 className='text-black' >WHY STUDY CHAMPION ACADEMY
    </h2>
    <div style={{backgroundColor:"red",height:"0.2rem",width:"7rem",marginLeft:"7rem"}}></div>
    <div className='row ms-4 mt-5'>
    {why.map(wh=><>
        <div className='text-danger col-1 '>{wh[1]}</div>
        <div className='col-11 ' style={{fontSize:"1.1rem",fontWeight:"bold",textAlign:"start"}}>{wh[0]}</div>
    <hr className='mt-1'></hr></>)}
 
    </div>
    </div>
    <div className='col-6 mobileHide' style={{marginTop:"10rem"}}>
    <img src='assets/images/success.jpg' style={{width:"80%",height:"40rem"}}></img>
    </div>
    </div>
    </div>
    
        </div> );
}
 
export default WhyStudy;
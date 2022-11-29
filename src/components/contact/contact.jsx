import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

import axios from "axios";
import "./contact.css";
import ContectFormField from "./contactForm";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
function Contact(params) {
const[formValue,setFormValue]=useState({
    fullName:"",email:"",message:"",mobile:""
});
const history=useNavigate();
const [snack, setSnack] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = snack;

  return (
  <div class="row contactUs" >
 <div className="row" style={{marginTop:"8rem"}}>
 <h5 class="text-uppercase" style={{color:"orangered"}}>Contact Us</h5>
            <h1 class="display-3 text-uppercase mb-0">Get In Touch</h1>
 <div className="col-lg-5 col-sm-6 mt-5 mobileHide">
 <img src="assets/images/conta.jpg" style={{width:"40rem"}}></img>
 </div>
 <div className="col-lg-6 col-sm-12 mb-5 ms-3"style={{marginTop:"8rem"}}>
 <div className="row" >
 <PhoneInTalkIcon className="col-4 "  style={{backgroundColor:"#001253",color:"white",padding:"0.5rem",borderRadius:"1.5rem",width:"3rem",height:"3rem",textAlign:"start"}}></PhoneInTalkIcon>
 <h4 className="col-8"  style={{marginTop:"0.5rem",textAlign:"start"}}>+91 94244 24437</h4>
 </div>
 <div className="mt-5 row" >
 <EmailIcon className="col-2 "  style={{backgroundColor:"#001253",color:"white",padding:"0.5rem",borderRadius:"1.5rem",width:"3rem",height:"3rem",textAlign:"start"}}></EmailIcon>
 <h5 className="col-8"  style={{marginTop:"0.5rem",textAlign:"start"}}>studychampionacademy@gmail.com</h5>
 </div>
 <div className="mt-5 row">
 <HomeIcon className="col-4" style={{backgroundColor:"#001253",color:"white",padding:"0.5rem",borderRadius:"1.5rem",width:"3rem",height:"3rem",textAlign:"start"}}></HomeIcon>
 <h6 className="col-8" style={{marginTop:"0.5rem",textAlign:"start"}}>110, Sundaram Complex, Bhawarkua Main Rd, Transport Nagar, Indore, Madhya Pradesh 452001</h6>
 </div>
 
 </div>
 
 </div>
  
 
 
 <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=study champion academy indore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://piratebay-proxys.com/">Piratebay</a></div></div>
  </div>
  )
}

export default Contact;
import React, { Component } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import "./footer.css"

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted bgFooter pt-2'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3 text-white'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <img style={{width:"20rem"}} src='assets/images/logo.png'></img>
             
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto text-white mb-4 courseFooter'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>COURSES</h6>
              <p>
                <Link to='#!' className='text-reset'>
                  UPSC
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  MPPSC
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  SSC
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  BANK
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 courseFooter'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link href='#!' className='text-reset'>
                  Pricing
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Settings
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Orders
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='4' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2'  />
                110, Sundaram Complex, Bhawarkua Main Rd, Transport Nagar, Indore, Madhya Pradesh 452001
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                studychampionacademy@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 94244 24437
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top'>
        <div className='me-5 d-none d-lg-block'>
        <h4 style={{color:"white"}}>Get connected with us on social networks :</h4>
          
        </div>

        <div>
          <Link href='' className='me-4 text-reset'>
            <FacebookIcon style={{color:"white"}}></FacebookIcon>
          </Link>
          <Link href='' className='me-4 text-reset'>
            <TwitterIcon style={{color:"white"}}></TwitterIcon>
          </Link>
          <Link href='' className='me-4 text-reset'>
            <InstagramIcon style={{color:"white"}}></InstagramIcon>
          </Link>
          <a href='https://www.youtube.com/c/StudyChampionAcademy' className='me-4 text-reset'>
           <YouTubeIcon style={{color:"white"}}></YouTubeIcon>
          </a>
          
        </div>
      </section>
    </MDBFooter>
  );
}
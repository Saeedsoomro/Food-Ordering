import React from 'react'
import './footer.css'
import Facebook from "@material-ui/icons/Facebook";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Fastfood from '@material-ui/icons/Fastfood';

const Footer = () => {
  return (
    <>
    <div className='f-container'>
       <div className="f-grid-box">
            <div className='box'>
                <div className="footer__logo">
                <p style = {{color:'var(--green) ', width:'6rem'}}> <Fastfood/></p>
                <h5>Besty</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt pariatur accusamus
                </p>
                </div>
            </div>   
            <div className='box'>
            <h5 className="footer__title">Delivery Time</h5>
            <div className="deliver__time-list">
              <div className=" delivery__time-item">
                <span>Monday - Friday</span>
                <p>10:00am - 11:00pm</p>
              </div>
              <div className=" delivery__time-item">
                <span>Saturday - Sunday</span>
                <p>Off day</p>
              </div>
            </div>
            </div>   
            <div className='box'>
                <h5 className="footer__title">Contact</h5>
                <div className="deliver__time-list">
                  <div className=" delivery__time-item">
                    <p><span>Location:</span> Karachi, Street-3100, Pakistan</p>
                  </div>
                  <div className=" delivery__time-item">
                    <p><span>Phone:</span> O3077449985</p>
                  </div>

                  <div className=" delivery__time-item">
                    <p><span>Email:</span> example@gmail.com</p>
                  </div>
                </div>
            </div>   
            <div className='box'>
                <h5 className="footer__title">Newsletter</h5>
                <p>Subscribe our Channel</p>
                <div className="newsletter">
                  <input type="email" placeholder="Enter your email" />
                  <span>
                    SVG
                  </span>
                </div>
            </div>   
      </div>
        <div className="copyright__text">
          <p>
              Copyright - 2022, website made by Saeed, Wahid, Abrar. All Rights
              Reserved.
          </p>
          <div className="social-svg">
              <a href="#"><Facebook/></a>
              <a href="#"><Instagram/></a>
              <a href="#"><LinkedIn/></a>
              <a href="#"><GitHub/></a>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer
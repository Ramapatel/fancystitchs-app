import React from 'react'
import { Link } from 'react-router-dom'
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return <>
  <footer className='py-4'>
  <div className='container-xxl'>
      <div className='row align-item-center'>
        <div className='col-5'>
          <div className='Footer-top-data d-flex gap-30 algin-items-center'>
            <img src={newsletter} alt="newsletter"/>
            <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
          </div>
        </div>
        <div className='col-7'><div class="input-group mb">
          <input type="text" class="form-control py-2" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2"/>
          <span class="input-group-text p-3" id="basic-addon2">
            Subscribe
          </span>
        </div></div>
      </div>
    </div>  
  </footer>
  <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-4'>
          <h4 className='text-white mb-4'>Contact Us</h4>
          <address className='text-white fs-6'>
            Vijayawada, Andhra Pradhesh
          </address>
          <p className='text-white fs-6'>+91 8989832898</p>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
            <Link className='text-white py-2 mb-1'>Refund Policy</Link>
            <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
            <Link className='text-white py-2 mb-1'>Blogs</Link>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Accounts</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>About Us</Link>
            <Link className='text-white py-2 mb-1'>Faq</Link>
            <Link className='text-white py-2 mb-1'>contact</Link>
          </div>
        </div>
        <div className='col-2'>
          <h4 className='text-white mb-4'>Links</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Headphones</Link>
            <Link className='text-white py-2 mb-1'>Tablets</Link>
            <Link className='text-white py-2 mb-1'>Watch</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <p className='text-center mb-0 text-white'>
            &copy; {new Date().getFullYear()}; Powered by FancyStitchs
          </p>
        </div>
      </div>
    </div>
  </footer>
  </>
}

export default Footer

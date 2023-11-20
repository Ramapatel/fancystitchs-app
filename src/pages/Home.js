import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import {services} from "../utils/Data"
const Home = () => {
  return <>
  <Container class1='home-wrapper-1 py-5'>
    <div className='row'>
      <div className='col-6'>
        <div className='main-banner position-relative'>
          < img src='images/main-banner-1.jpeg' className='img-fluid rounded-3' alt="banner1" style={{height:"450px"}}/>
          <div className='main-banner-content position-absolute'>
            <h4>Premium</h4>
            {/* <h5></h5> */}
            <p>From $50</p>
            <Link className='button'>BUY NOW</Link>
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
          <div className='small-banner position-relative'>
            < img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt="banner1"/>
            <div className='small-banner-content position-absolute'>
            <h4>New Arrival</h4>
            {/* <h5></h5> */}
            <p>From $50</p>
            <Link className='button'>BUY NOW</Link>
            </div>
          </div>

          <div className='small-banner position-relative'>
            < img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt="banner1"/>
            <div className='small-banner-content position-absolute'>
            <h4>15% off</h4>
            {/* <h5></h5> */}
            <p>From $50</p>
            <Link className='button'>BUY NOW</Link>
            </div>
          </div>
          
          <div className='small-banner position-relative'>
            < img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt="banner1"/>
            <div className='small-banner-content position-absolute'>
            <h4>upto 50% off</h4>
            {/* <h5></h5> */}
              <p>From $50</p>
            <Link className='button'>BUY NOW</Link>
            </div>
          </div>

          <div className='small-banner position-relative'>
            < img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt="banner1"/>
            <div className='small-banner-content position-absolute'>
            <h4>Trending</h4>
            {/* <h5></h5> */}
            <p>From $50</p>
            <Link className='button'>BUY NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>

  <Container class1="home-wrapper-2 py-5">
    <div className='row'>
        <div className='col-12'>
          <div className='servies d-flex align-items-center justify-content-between'>
            {
              services?.map((i,j)=>{
                return(
                  <div className='d-flex align-items-center gap-15 key={j}'>
                    <img src={i.image} alt='services'/>
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                )
              })};
          </div>

        </div>
    </div>
  </Container>
  
  <Container class1="home-wrapper-2 py-5">
  <div className='row'>
        <div className='col-12'>
          
          <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Music & Gaming</h6>
                <p>10 Items</p>
              </div> 
              <img src='images/tv.jpeg' alt='camera'style={{height:"110px"}}/>
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div> 
              <img src='images/camera.jpeg' alt='camera'style={{height:"110px"}}/>
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Smart Tv</h6>
                <p>10 Items</p>
              </div> 
              <img src='images/tv.jpeg' alt='camera'style={{height:"110px"}}/>
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Watches</h6>
                <p>10 Items</p>
              </div> 
              <img src='images\watch2.jpeg' alt='headphone' style={{height:"110px"}}/>
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Music & Gaming</h6>
                <p>10 Items</p>
              </div> 
              <img src='images/tv.jpeg' alt='camera'style={{height:"110px"}}/>
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div> 
              <img src='images/camera.jpeg' alt='camera'style={{height:"110px"}}/>
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Smart Tv</h6>
                <p>10 Items</p>
              </div> 
              <img src='images/tv.jpeg' alt='camera'style={{height:"110px"}}/>
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Watches</h6>
                <p>10 Items</p>
              </div> 
              <img src='images\watch2.jpeg' alt='headphone' style={{height:"100px"}}/>
            </div>
          </div>

        </div>
      </div>
  </Container>
  <Container class1="special-wrapper py-5 home-wrapper-2">
  <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Special Products</h3>
        </div>
      </div>
      <div className='row gap-5'>
        <SpecialProduct/>
        <SpecialProduct/>
        <SpecialProduct/>
      </div>
  </Container>
  <Container class1="featured-wrapper py-5 home-wrapper-2">
  <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Featured Collection</h3>
        </div>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
  </Container>
  
  <Container class1="marque-wrapper home-wrapper-2 py-5">
  <div className='row'>
        <div className='col-12'>
          <div className='marquee-inner-wapper bg-white p-3 card-wrapper'>
            <Marquee className="d-flex">
              <div className='mx-4 w-25'> 
                <img src='images/brand-01.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'> 
                <img src='images/brand-02.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'> 
                <img src='images/brand-03.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'> 
                <img src='images/brand-04.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'> 
                <img src='images/brand-05.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'> 
                <img src='images/brand-06.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'> 
                <img src='images/brand-07.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'> 
                <img src='images/brand-08.png' alt='brand'/>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
  </Container>
  <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Latest Blogs</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-3'>
        <BlogCard/>
        </div>
        <div className='col-3'>
        <BlogCard/>
        </div>
        <div className='col-3'>
        <BlogCard/>
        </div>
      </div>
  <Container class1="blog-wrapper py-5 home-wrapper-2"></Container>
  
  </>
  }

export default Home

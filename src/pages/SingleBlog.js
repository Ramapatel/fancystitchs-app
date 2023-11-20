import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';

const SingleBlog = () => {
  return (<>
    <Meta title={"Dynamic Blog Name"}/>
    <BreadCrumb title="Dynamic Blog Name"/>
    <Container class1='blog-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-9'>
                <div className='single-blog-card'>
                    <Link to="/blog" className='d-flex align-items-center gap-10'>
                        <HiOutlineArrowLeft className='fs-4'/>
                        Go Back to Blog</Link>
                    <h3 className='title'>
                        A Beatiful Sunday Morning
                    </h3>
                    <img src={blog} alt='blog' className='img-fluid w-100 my-4'/>
                    <p>
                    There’s a never-ending debate as to whether technology has helped or hindered humankind, but this guide to the best tech gifts is not the forum for that dispute. Instead, let’s accept the status quo — a market saturated with gadgets vying for holiday dollars
                    </p>
                </div>
                </div>
            </div>
    </Container>

  </>
  )
}

export default SingleBlog

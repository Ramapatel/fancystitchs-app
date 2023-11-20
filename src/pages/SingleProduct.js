import React,{useState} from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-stars';
import ReactImageZoom from 'react-image-zoom';
import Color from "../components/Color";
import {TbGitCompare} from "react-icons/tb";
import {AiOutlineHeart} from "react-icons/ai";
import Container from '../components/Container';
import watch from "../images/watch.jpeg"

const SingleProduct = () => {
    const props = {width: 400, height: 100, zoomWidth: 600, img: "https://tse1.mm.bing.net/th?id=OIP.EJwsKZU5PdWPciND5C4BMAHaJ2&pid=Api&P=0&h=180"};

    const[orderedProduct , setorderedProduct]=useState(true);

  return (
    <>
    <Meta title={"Product Name"}/>
    <BreadCrumb title="Product Name"/>
    <Container class1='main-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>
                        <div className='container-xxl'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='main-product-image'>
                                        <div>
                                        <ReactImageZoom {...props} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='main-product-details'>
                        <div classSName='border-bottom'>
                            <h3 className='title'>watch</h3>
                        </div>
                        <div className='border-bottom py-3'>
                            <p className='price'>
                                $100
                            </p>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars cout={5} size={24} value={4} edit={false} activecolor="#ffd700"/>
                                    <p className='mb-0 t-review'> (2 Reviews) </p>
                            </div>
                            <a className='review-btn' href='#review'>Write a Review</a>
                        </div>
                        <div className='border-bottom py-3'>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Type:</h3> <p className='product-data'>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Brand:</h3> <p className='product-data'>HAvels</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Category:</h3> <p className='product-data'>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Avability:</h3> <p className='product-data'>In Stock</p>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Size:</h3> 
                                <div className='d-flex flex-wrap gap-15'>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                </div>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Color:</h3> 
                                <Color/>
                            </div>
                            <div className='d-flex align-items-center gap-15'>
                                <button className='button signup border-0' type='submit'>
                                    Add to Cart
                                </button>
                                <button className='button signin' type='submit'>
                                    Buy It Now
                                </button>
                            </div>
                            <div className='d-flex align-items-center gap-15'>
                                <div>
                                    <a href=''><TbGitCompare className='fs-5'/>Add to Compare</a>
                                </div>
                                <div>
                                    <a href=''><AiOutlineHeart className='fs-5'/>Add to Wishlist</a>
                                </div>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Shipping & Returns:</h3>
                                <p className='product-data'>
                                    Free shipping and returns avaible on all orders! We ship all US domestic orders within <b>5-10 business days!</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Container class1='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                    <h4>Description</h4>
                        <div className='bg-white p-3'>
                        
                        <p className='bg-white p-3'>ddgfjsriiiiiiiiiiiiiii</p>
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1='reviews-wapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                    <ReactStars cout={5} size={24} value={4} edit={false} activecolor="#ffd700"/>
                                    <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {orderedProduct&&(
                                    <div>
                                    <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                                    </div>
                                )}
                            </div>
                            <div className='review-form py-4'>
                            <h4 className='mb-2'>Write a Review</h4>
                            <form action='' className='d-flex flex-column gap-15'>
                                <ReactStars cout={5} size={24} value={4} edit={true} activecolor="#ffd700"/>
                                <div>
                                    <textarea name='' className='w-100 form-control' cols="30" rows="4" placeholder='comments'></textarea>
                                </div>
                                <div className='d-flex justify-content-end'> 
                                    <button className='button border-0'>Submit Review</button>
                                </div>
                            </form>                            
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className="mb-0">Pranav</h6>
                                        <ReactStars cout={5} size={24} value={4} edit={false} activecolor="#ffd700"/>
                                    </div>
                                <p className='mt-3'>review 1 erwetfwedfwe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1='popular-wrapper py-5 home-wrapper2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Product</h3>
                    </div>
                </div>
                <div className='row'>                                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                </div>
        </Container>
    </Container>
    </>
  )
}

export default SingleProduct
import React,{useState} from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-stars';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';

const OurStore = () => {
    const [grid,setGrid]=useState(4);

  return (
  <>
  <Meta title={"Our Store"}/>
  <BreadCrumb title='Our Store'/>
  <Container class1='store-wrapper home-wrapper py-5'>
        <div className='row'>
            <div className='col-3'>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>
                        Shop by Categories
                    </h3>
                    <div >
                        <ul className='ps-0'>
                            <li>Watch</li>
                            <li>Tv</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>
                        Filter By
                    </h3>
                    <div>
                        <h5 className='sub-title'>Avaiblity</h5>
                        <div>
                            <div className='form-check'>
                                <input className='form-check-input' type="checkbox" value='' id =""/>
                                <label className='form-check-label' hrmlFor=''>
                                    In Stock(1)
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type="checkbox" value='' id =""/>
                                <label className='form-check-label' htmlFor=''>
                                    Out of Stock(0)
                                </label>
                            </div>
                        </div>
                        <h5 className='sub-title'>Price</h5>
                        <div className='d-flex aligin-items-center gap-10'>
                            <div className="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="From"/>
                                <label hrmlFor="floatingInput">Form</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput1" placeholder="To"/>
                                <label hrmlFor="floatingInput1">To</label>
                            </div>
                        </div>
                        <h5 className='sub-title'>Colors</h5> 
                        <div>
                            <Color/>
                        </div>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>
                        Product Tags
                    </h3>
                    <div >
                        <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                Headphone
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                Laptop
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                Mobile
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                Cloths
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                wire
                            </span>
                        </div>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>
                        Random Product
                    </h3>
                    <div>
                        <div className='random-products d-flex'>
                            <div className='w-50'>
                                <img src='images/watch.jpg' className='img-fluid' alt='watch'/>
                            </div>
                            <div className='w-50'>
                                <h5>Kids headphone bulk 10 pack multi colored</h5>
                                <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700"/>
                                <b>$300</b>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='col-9'>
                <div className='filter-sort-grid mb-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='mb-0 d-block'>Sort By:</p>
                            <select name='' className='form-control form-select' id="">
                                <option value="manual">Featured</option>
                                <option value="best selling" selected="selected">Best Selling</option>
                                <option value="title-ascending">Alphabetically, A-Z</option>
                                <option value="title-decending">Alphabetically, Z-A</option>
                                <option value="price-ascending">Price, low to high</option>
                                <option value="price-decending">Price, high to low</option>
                                <option value="Created-ascending">Date, old to new</option>
                                <option value="Created-decending">Date, new to old</option>

                            </select>
                        </div>
                        <div className='d-flex align-items-center gap-10 grid'>
                            <p className='totalproducts  mb-0' style={{width:"100px"}}>21 Products</p>
                            <div className='d-flex gap-10 align-items-center'>
                                <img onClick={()=>{
                                    setGrid(3);
                                }} 
                                src='images/gr4.svg' className='d-block img-fluid' alt='grid'/>
                                <img onClick={()=>{
                                    setGrid(4);
                                }} 
                                src='images/gr3.svg' className='d-block img-fluid' alt='grid'/>
                                <img  onClick={()=>{
                                    setGrid(6);
                                }} 
                                src='images/gr2.svg' className='d-block img-fluid' alt='grid'/>
                                <img  onClick={()=>{
                                    setGrid(12);
                                }} 
                                src='images/gr.svg' className='d-block img-fluid' alt='grid'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-list pb-5'>
                    <div className='d-flex'>
                    <ProductCard grid={grid}/>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  </>
  );
}

export default OurStore;

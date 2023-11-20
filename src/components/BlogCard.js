import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ()=>{
    return (
        <div className="blog-card">
            <div className="card-image">
                <img src='images/blog-1.jpeg' className="img-fluid w-100" alt="blog"/>
            </div>
            <div className="blog-content">
                <p className="date">1 Dec,2022</p>
                <h5 className="title">
                    A beautiful sunday morning renaissance 
                </h5>
                <p className="desc">There’s a never-ending debate as to whether technology has helped or hindered humankind, but this guide to the best tech gifts is not the forum for that dispute. Instead, let’s accept the status quo — a market saturated with gadgets vying for holiday dollars.</p>
                <Link to="/blog/:id" className="button">
                    Read More
                </Link>
        </div>
        </div>
    );
}

export default BlogCard;
import React from 'react'
import './blog.css'
import Article from "../../components/article/Article";
import {blog01, blog02, blog03, blog04, blog05} from "../../components/article/imports"


export const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" >
           <div className="gpt3__blog-heading" >
                <h1 className="gradient__text"> Possibilities beyond imagination </h1>
           </div>
           <div className="gpt3__blog-container" >
                <div className="gpt3__blog-container_groupA" >
                    <Article imageUrl={blog01} date="Sep 26, 2021" title="titles of posts" />
                    <a href="https://www.google.com">SSS</a>
                </div>

                <div className="gpt3__blog-container_groupB" >
                    <Article imageUrl={blog02} date="Sep 26, 2021" title="Post one"  />
                    <Article imageUrl={blog03} date="Sep 26, 2021" title="Post two"  />
                    <Article imageUrl={blog04} date="Sep 26, 2021" title="Post three"  />
                    <Article imageUrl={blog05} date="Sep 26, 2021" title="Post four"  />
                </div>
           </div>
        </div>
    )
}


export default Blog
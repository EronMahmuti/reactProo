import React from 'react'
import './blog.css'
import Article from "../../components/article/Article";
import {blog01, blog02, blog03, blog04, blog05} from "../../components/article/imports"


export const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" >
           <div className="gpt3__blog-heading" >
                <h1 className="gradient__text"> Achievements and tools </h1>
           </div>
           <div className="gpt3__blog-container" >
               
                <div className="gpt3__blog-container_groupB" >
                    <Article imageUrl={blog02} date="Achievement" title="CYBER SECURITY IN KOSOVO IN HANDS OF YOUNG PEOPLE" 
                        reference="https://undpkosovo.exposure.co/cyber-security-in-kosovo-in-hands-of-young-people?fbclid=IwAR1QrEDwnOYSKe9OnV4JdjwUHc9Alyxd4RrGwwXYAjZVZ_4QWY34CGjhEN4"   />
                    <Article imageUrl={blog04} date="Achievement" title="Acknowledgments to the students who won first place in the cyber security competition" 
                        reference="https://www.umib.net/en/acknowledgments-to-the-students-who-won-first-place-in-the-cyber-security-competition/" />
                    <Article imageUrl={blog05} date="Tools" title="You can use CSS generators to avoid some time-consuming tasks." 
                        reference="https://html-css-js.com/css/generator/" />
                    <Article imageUrl={blog03} date="Achievement" title="Engineering Informatics students win the cyber security competition" 
                        reference="https://www.umib.net/en/engineering-informatics-students-win-the-cyber-security-competition/" />
                </div>
           </div>
        </div>
    )
}


export default Blog
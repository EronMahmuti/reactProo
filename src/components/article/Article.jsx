import React, { useEffect } from 'react';
import './article.css';
import Aos from 'aos'
import { Route, Routes } from 'react-router-dom'

export const Article = ({ imageUrl, date, title, reference }) => {
        useEffect(() => {
            Aos.init({duration:1000});
        }, [])
    return (
        <div className="gpt3__blog-container_article" data-aos="fade-up" data-aos-easing="linear" >
            <div className="gpt3__blog-container_article-image" >
                <img src={ imageUrl } alt="blog" />
            </div>
            <div className="gpt3__blog-container_article-content" >
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={reference} className='btn' > Read more </a>
            </div>
        </div>
    )
}


export default Article
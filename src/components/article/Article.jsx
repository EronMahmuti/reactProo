import React from 'react';
import './article.css';
import NewRouter from './NewRouter';
import { Route, Routes } from 'react-router-dom'

export const Article = ({ imageUrl, date, title, reference }) => {
    const handleClick = () => {
        
    }

    return (
        <div className="gpt3__blog-container_article" >
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
import React from 'react';
import './article.css';
import NewRouter from './NewRouter';
import { Route, Routes } from 'react-router-dom'

export const Article = ({ imageUrl, date, title }) => {
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
            </div>
        </div>
    )
}


export default Article
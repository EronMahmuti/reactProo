import React from 'react';
import './article.css';

export const Article = ({ imageUrl, date, title }) => {
    const handleClick = () => {
        console.log(title);
    }

    return (
        <div className="gpt3__blog-container_article" >
            <div className="gpt3__blog-container_article-image" >
                <img src={ imageUrl } alt="blog" />

            </div>
            <div className="gpt3__blog-container_article-content" >
                <p>{date}</p>
                <h3>{title}</h3>
                <button className='eronButton' onClick={handleClick} >Continue Reading</button>
            </div>
        </div>
    )
}


export default Article
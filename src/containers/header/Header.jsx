import React, { useEffect } from 'react';
import './header.css';
import people from '../../assets/newPeople.png';
import Aos from 'aos'
import ai from '../../assets/EM-header.png';

export const Header = () => {
    useEffect(() => {
        Aos.init({duration:1100});
    }, [])
    return (
        <div className="gpt3__header" id="home" > 
             <div className="gpt3__header-content" data-aos="fade-up" data-aos-easing="linear" >
                <h1 className="gradient__text"> Let me handle the website, while you do what you do the best </h1>
                <p>  Let's work together  </p>
                {/* <div className="gpt3__header-content__input" > 
                    <input type="email" placeholder="Your email address" />
                    <button type="button" >Get Started</button>
                </div> */}
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"  />
                    <p> Happy  Clients </p>
                </div>
             </div>
            
            <div className="gpt3__header-image" data-aos="fade-up" data-aos-easing="linear">
                    <img src={ai} alt="ai"/>
            </div>
        </div>
    )
}


export default Header
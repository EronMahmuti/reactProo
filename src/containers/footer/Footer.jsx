import React, { useEffect } from 'react';
import './footer.css';
import Aos from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faFacebookSquare , faTwitterSquare , faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    useEffect(() => {
        Aos.init({duration:1000});
    }, [])
    return (
        <div className="gpt3__footer section__padding" id="contact" >
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text " >Let's connect</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>I'm active on multiple Social Media platforms. Reach out - let's follow each other and connect.
                </p>
            </div>
            <div className="gpt3__footer-social">
                <a href='//www.linkedin.com/in/eron-mahmuti-b06118195/' data-aos="flip-right" >
                    <FontAwesomeIcon className='social linkedin' target='_blank' icon={faLinkedin} />
                </a>
                <a href='https://www.facebook.com/eronm' data-aos="flip-right" >
                    <FontAwesomeIcon className='social facebook' icon={faFacebookSquare} />
                </a>
                <a href='https://twitter.com/eron_mahmuti' data-aos="flip-right" >
                    <FontAwesomeIcon className='social twitter' icon={faTwitterSquare} />
                </a>                    
                <a href='https://github.com/EronGit1' data-aos="flip-right" >
                    <FontAwesomeIcon className='social instagram' icon={faGithubSquare} />
                </a>
                
            </div>


        </div>
    )
}


export default Footer
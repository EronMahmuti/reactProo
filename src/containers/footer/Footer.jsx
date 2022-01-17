import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faFacebookSquare , faTwitterSquare , faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
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
                <a href='//www.linkedin.com/in/eron-mahmuti-b06118195/' >
                    <FontAwesomeIcon className='social linkedin' target='_blank' icon={faLinkedin} />
                </a>
                <a href='https://www.facebook.com/eronm' >
                    <FontAwesomeIcon className='social facebook' icon={faFacebookSquare} />
                </a>
                <a href='https://twitter.com/eron_mahmuti' >
                    <FontAwesomeIcon className='social twitter' icon={faTwitterSquare} />
                </a>                    
                <a href='https://github.com/EronGit1' >
                    <FontAwesomeIcon className='social instagram' icon={faGithubSquare} />
                </a>
                
            </div>


        </div>
    )
}


export default Footer
import React from 'react'
import './footer.css'
import gpt3Logo from "../../assets/logo.svg"

export const Footer = () => {
    return (
        <div className="gpt3__footer section__padding" >
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text " >Do you want ?</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Do you want ?</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>Do you want ?</p>
                </div>        
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>L</p>
                    <p>L</p>
                    <p>L</p>
                    <p>L</p>
                </div>  
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>L</p>
                    <p>L</p>
                    <p>L</p>
                    <p>L</p>
                </div>  
                  
            </div>
        </div>
    )
}


export default Footer
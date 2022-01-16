import React from 'react';
import './brand.css';
import {zimi, ndero ,lobi , eki,slack,atlassian, dropbox, shopify} from "./imports";

export const Brand = () => {
    return (
        <div className="gpt3_brand section__padding" >
            <div className="gpt3__brand-imgs" >
                <img src={zimi} alt="google" />                
            </div>
            <div className="gpt3__brand-imgs" >
                <img src={ndero} alt="slack" />
            </div>
           
            <div className="gpt3__brand-imgs" >
                <img src={lobi} alt="dropbox" />
            </div>
            <div className="gpt3__brand-imgs" >
                <img src={eki} alt="shopify" />
            </div>
        </div>
    )
}


export default Brand
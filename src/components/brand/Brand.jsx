import React from 'react';
import './brand.css';
import {zimi, ndero ,lobi , eki} from "./imports";

export const Brand = () => {
    return (
        <div className="gpt3_brand section__padding" >
            <div className="gpt3__brand-imgs" >
                <img src={zimi} alt="mizzi" />                
            </div>
            <div className="gpt3__brand-imgs" >
                <img src={ndero} alt="ndero" />
            </div>
           
            <div className="gpt3__brand-imgs" >
                <img src={lobi} alt="lobi" />
            </div>
            <div className="gpt3__brand-imgs" >
                <img src={eki} alt="eki" />
            </div>
        </div>
    )
}


export default Brand
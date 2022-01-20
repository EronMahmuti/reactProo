import React, {useEffect} from 'react';
import './brand.css';
import Aos from 'aos'
import {zimi, ndero ,lobi , eki} from "./imports";

export const Brand = () => {
    useEffect(() => {
        Aos.init({duration:1000});
    }, [])
    return (
        <div className="gpt3_brand section__padding" >
            <div className="gpt3__brand-imgs" data-aos="fade-up" data-aos-easing="linear" >
                <img src={zimi} alt="mizzi" />                
            </div>
            <div className="gpt3__brand-imgs" data-aos="fade-up" data-aos-easing="linear" >
                <img src={ndero} alt="ndero" />
            </div>
           
            <div className="gpt3__brand-imgs" data-aos="fade-up" data-aos-easing="linear" >
                <img src={lobi} alt="lobi" />
            </div>
            <div className="gpt3__brand-imgs" data-aos="fade-up" data-aos-easing="linear" >
                <img src={eki} alt="eki" />
            </div>
        </div>
    )
}


export default Brand
import React from 'react'
import './possibility.css'
import possibilityImage from "../../assets/lBlog1.png";

export const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility" >
                <div className="gpt3__possibility-image" >
                    <img src={possibilityImage} alt="possibilty" />
                </div>
                <div className="gpt3__possibility-content">
                    <h4>Request early acces to get started</h4>
                    <h1 className="gradient__text"> Possibilities beyond imagination of the mind and views of the eyes </h1>
                    <p>While I prefer to work with creatives, I will also work with businesses that I feel I would enjoy working with. If you are a restaurant, a barber, e-commerece owner or something of the sort, we can definitely build something cool.</p>
                    <h4>I believe that every person, business, and organization should have a great website. </h4>
                </div>
        </div>
    )
}


export default Possibility
import React from 'react'
import './feature.css'

export const Feature = ({title, text}) => {
    return (

            <div className="gpt3__features-container__feature">
                <div className="gpt3__features-container__feature-title">
                <div></div>
                    <h1>{title}</h1>
                </div>
                <div className="gpt3__features-container_feature-text">
                    <p>{text}</p>
                </div>
            </div>
    )
}


export default Feature
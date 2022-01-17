import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

export const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="about" >
            <div className="gpt3__whatgpt3-heading" >
                <h1 className="gradient__text"> My name is Eron Mahmuti </h1>
            </div>
            <div className="gpt3__whatgpt3-container" >
                <Feature title="Purpose" text=" ... and I'm here to build your websites." />
                <Feature title="Focus" text="My focus is on building websites for creatives, employers and for all those that make their living online." />
                <Feature title="Priority" text="I like making money but I am also very particular about the businesses that I will work for.Priority will be given to small businesses." />
                
            </div>
        </div>
    )
}


export default WhatGPT3
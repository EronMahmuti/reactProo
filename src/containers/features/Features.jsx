import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
    {
        title: 'Web development',
        text: "I'm specialized in minimal, lightning-fast websites that are optimized for all devices,From concept to completion, I'm your one-stop shop for upgrading your web presence and generating more leads..",
      },
      {
        title: 'Cybersecurity',
        text: "Cybersecurity is much more than a matter of IT. Security in IT is like locking your house or car - it does not stop the bad guys, but if it's good enough they may move on to an easier target.",
      },
      {
        title: 'Design flyers, logos etc.',
        text: "Front door to the world of graphic design.Design is not a single object or dimension. Design is messy and complex. I try to Make it simple, but significant.",
      },
      {
        title: 'Search engine optimization',
        text: "demystify the process of keyword research and technical SEO. Need killer content to bring in new search engine traffic? Whoever searches for your business,the road to you will become shorter.",
      },
]

export const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features" >
            <div className="gpt3__features-heading" >
                <h1 className="gradient__text">The Future is Now and You Just Need to Realize It.</h1>
                <p>Provided services </p>
            </div>
            <div className="gpt3__features-container" >
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}


export default Features
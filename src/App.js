import React from 'react'
import { Brand, CTA, Navbar } from './components/index.js'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.css'



const App = () => {
    return (
        <Router>
        <div>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            
            <Footer />
           
        </div>
        </Router>
    )
}

export default App
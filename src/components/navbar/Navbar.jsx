import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css'

const Menu = () => (
    <>
        <p> <a href="#home">Home </a> </p>
        <p> <a href="#about">About </a> </p>
        <p> <a href="#contact">Contact </a> </p>
        <p> <a href="#Posts">Posts </a> </p>
    </>
)

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="gpt3__navbar" >
            <div  className="gpt3__navbar-links" >
                <div className="gpt3__navbar-links_container">
                         <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                {/* <p>Sign in</p>
                <button type="button" >Sign Up</button> */}
            </div>
            <div className="gpt3__navbar-menu">
            {
                toggle ? <RiCloseLine color="#34343" size={27} onClick = {() => setToggle(false)} />
                       : <RiMenu3Line color="#fff" size={27} onClick = {() => setToggle(true)} />
            }{
                toggle && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                             <Menu />
                             <div className="gpt3__navbar-menu_container-links-sign">
                                {/* <p>Sign in</p>
                                <button type="button" >Sign Up</button> */}
                            </div>
                         </div>
                    </div>
                )
            }
              </div>
        </div>
    )
}


export default Navbar
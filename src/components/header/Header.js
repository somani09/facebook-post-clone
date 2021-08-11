import React from 'react'
import './header.scss'
import { SiFacebook } from 'react-icons/si'
import { AiFillHome } from 'react-icons/ai'
import { BsDisplay } from 'react-icons/bs'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { RiGamepadLine } from 'react-icons/ri'

function Header() {
    return (
        <div className="header row align-center">

            <div className="search row">
                <SiFacebook className="header-icon facebook-icon"/>
                <div className="search-input-container center">
                    <input className="search-input" placeholder="&#61442; Search Facebook" />
                </div>
            </div>
            
            <div className="center-area row space-evenly">
                <div className="home-center active center-block center">
                    <div className="center active-block icon-container">
                        <AiFillHome className="center-icon active-icon" />
                    </div>
                </div>
                <div className="watch inactive center-block center">
                    <div className="center inactive-block icon-container">
                        <BsDisplay className="center-icon " />
                    </div>
                </div>
                <div className="market inactive center-block center">
                    <div className="center inactive-block icon-container">
                        <HiOutlineOfficeBuilding className="center-icon " />
                    </div>                
                </div>
                <div className="groups inactive center-block center">
                    <div className="center inactive-block icon-container">
                        <AiOutlineUsergroupAdd className="center-icon " />
                    </div>  
                </div>
                <div className="gaming inactive center-block center">
                    <div className="center inactive-block icon-container">
                        <RiGamepadLine className="center-icon " />
                    </div>  
                </div>
            </div>

            <div className="right-area">
                <div className="name-area row center">
                    <img  src={process.env.PUBLIC_URL +'assets/image1.jpg' } className="header-image" />
                    <p>Vaibhav</p>
                </div>
            </div>

        </div>
    )
}

export default Header

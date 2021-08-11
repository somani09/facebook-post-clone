import React, { useState } from 'react'
import './menu.scss'

import {AiOutlineBars} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { SiFacebook } from 'react-icons/si'
import { AiFillHome } from 'react-icons/ai'
import { BsDisplay } from 'react-icons/bs'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { RiGamepadLine } from 'react-icons/ri'

function Menu() {

    const [open, setOpen] = useState(false);
    
    return (
        <div className="menu">
            <div onClick={e=>setOpen(!open)} className="sidebar-open center">
                <AiOutlineBars style={{ display: open ? 'none': 'block'}} className="sidebar-icon"/>    
                <AiOutlineCloseCircle style={{ display: open ? 'block': 'none'}} className="sidebar-icon"/>    
            </div>
            <div style={{ display: open ? 'block': 'none'}} className="items">
            <div className="center-area col ">
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
            </div>
        </div>
    )
}

export default Menu

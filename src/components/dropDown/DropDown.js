import React from 'react'
import './dropDown.scss'
import Menu from './Menu'
function DropDown() {
    return (
        <div className="dropDown">
            <div className="facebook center">
                <p className="title">Facebook</p>
            </div>
            <Menu />
        </div>
    )
}

export default DropDown

import React from 'react'
import DropDown from './dropDown/DropDown'
import Header from './header/Header'
import './home.scss'
import Timeline from './timeline/Timeline'

function Home() {
    return (
        <div className="home center-col">
            <DropDown />
            <Header />
            <Timeline />
        </div>
    )
}

export default Home

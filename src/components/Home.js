import React from 'react'
import Header from './header/Header'
import './home.scss'
import Timeline from './timeline/Timeline'

function Home() {
    return (
        <div className="home center-col">
            <Header />
            <Timeline />
        </div>
    )
}

export default Home

import React, { Fragment } from 'react'
import About from './components/about.component'
import Home from './components/home.component'
import Navbar from './components/navbar.component'
import SocialLinks from './components/social-links.component'

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Home />
            <About />
            <SocialLinks />
        </Fragment>
    )
}

export default App
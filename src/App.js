import React, { Fragment } from 'react'
import Home from './components/home.component'
import Navbar from './components/navbar.component'
import SocialLinks from './components/social-links.component'

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Home />


            <SocialLinks />
        </Fragment>
    )
}

export default App
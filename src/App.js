import React from 'react'
import { About, Contact, Hero, Navbar, Portfolio, Skills } from './components'
import { Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div >
    )
}

export default App
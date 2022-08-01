import React from 'react'
import { About, Hero, Navbar } from './components'
import { Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div >
    )
}

export default App
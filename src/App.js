import React from 'react'
import { Hero, Navbar } from './components'
import { Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Hero />} />
            </Routes>
        </div >
    )
}

export default App
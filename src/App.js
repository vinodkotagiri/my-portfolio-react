import React from 'react'
import { Navbar } from './components'
const App = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='text-white'>This is body</div>
        </div >
    )
}

export default App
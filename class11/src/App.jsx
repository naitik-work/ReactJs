import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import {Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      {/* <h1 className='text-6xl underline text-semibold absolute top-1/2 left-1/2 -translate-1/2'>Hi, Naitik</h1>
      <Home/>
      <About/> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/kodex'
import Footer from './components/Footer'

const App = () => {

  
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/courses' element={<Courses/>}>
        <Route path='/courses/kodr' element={<Kodr/>}></Route>
        <Route path='/courses/kodex' element={<Kodex/>}></Route>
      </Route>

    </Routes>
    <Footer/>
    </div>
  )
}

export default App

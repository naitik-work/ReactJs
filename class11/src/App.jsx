import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import {Route, Routes} from 'react-router-dom'
import Product from './pages/Product'
import Info from './pages/Info'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Anycourse from './pages/Anycourse'
import Notfound from './pages/Notfound'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/info' element={<Info />}></Route>
        <Route path='/product/men' element={<Men/>}></Route>
        <Route path='/product/women' element={<Women/>}></Route>
        <Route path='/info/:id' element={<Anycourse/>}></Route>
        <Route path='/*' element={<Notfound/>}></Route>
      </Routes>
    </div>
  )
}

export default App

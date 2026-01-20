import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import Kodr from '../pages/Kodr'
import Kodex from '../pages/kodex'
import Courses from '../pages/Courses'
import About from '../pages/About'
import Home from '../pages/Home'
import { Route,Routes } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      {/* <NavLink to='/'
      style={({isActive})=>({
        color: isActive? 'red' : 'white'
      })}
      >Home</NavLink>
      <NavLink to='/about'
      style={({isActive})=>({
        color: isActive? 'red' : 'white'
      })}
      >About</NavLink>
      <NavLink to='/courses'
      style={({isActive})=>({
        color: isActive? 'red' : 'white'
      })}
      >Courses</NavLink> */}
  
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/courses' element={<Courses/>}>
        <Route path='/courses/kodr' element={<Kodr/>}></Route>
        <Route path='/courses/kodex' element={<Kodex/>}></Route>
      </Route>

    </Routes>
    </div>
  )
}

export default Navbar


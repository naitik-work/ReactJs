import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
      <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>

          <h3 className='text-2xl'>Navbar</h3>
          <div className='flex justify-between gap-5 font-semibold'>
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/product">Product</a>
            <a href="/info">Info</a> */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/info'>Info</Link>

          </div>
      </div>
  )
}

export default Navbar

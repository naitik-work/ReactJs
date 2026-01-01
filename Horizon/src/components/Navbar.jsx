import React from 'react'
import '../styles/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Horizon Courts</h2>

      <div className="nav-items">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Coaches</a>
        <a href="#">Events</a>
        <a href="#">Contact</a>
      </div>

      <button className="btn">Book Now</button>
    </nav>
  )
}

export default Navbar

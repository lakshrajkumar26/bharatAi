import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo"> Bharat AI </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
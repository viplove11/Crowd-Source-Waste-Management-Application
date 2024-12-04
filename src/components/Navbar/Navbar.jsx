import React from 'react'
import './Navbar.css'
import { FaBell } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <p>Eco <span>Track</span></p>
        </div>
        <div className="nav-impactScore">
            <p>impact Score : </p>
            <FaBell />
        </div>
    </div>
  )
}

export default Navbar
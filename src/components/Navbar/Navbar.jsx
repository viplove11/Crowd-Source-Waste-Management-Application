import React from 'react'
import './Navbar.css'
import { FaBell } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <p>Eco <span>Track</span></p>
        </div>
        <div className="nav-impactScore">
          <div className='score-text'>
          <FaLeaf />
            <p>
            impact Score : 200</p>
          </div>
            <FaBell className='bell' />
        </div>
    </div>
  )
}

export default Navbar
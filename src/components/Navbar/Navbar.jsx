import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='Mynavbar'>
      <div className='nav-logo'>
        <p>Eco <span>Track</span></p>
      </div>
      
        <Link to="/admin" className='AdminLoginButton'>Admin Login</Link>

    </div>
  )
}

export default Navbar
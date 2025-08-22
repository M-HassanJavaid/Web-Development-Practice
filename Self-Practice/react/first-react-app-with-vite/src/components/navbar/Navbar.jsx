import React from 'react'
import logo from './react.svg'
import './style.css'

const Navbar = () => {
  return (
    <nav>
        <div id="logo">
            <img src={logo} alt="react" />
        </div>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Create Account</li>
        </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'


const Navabar = () => {

  function changeStyleOnNavigate(e) {
    if (e.isActive) {
      return "activeNav"
    } else {
      return ""
    }
  }

  return (
    <nav>
      <h1 id="logo">Hassan Javaid</h1>
      <ul>
        <li><NavLink to="/" className={changeStyleOnNavigate}>Home</NavLink></li>
        <li><NavLink to="/contact" className={changeStyleOnNavigate}>Contact me</NavLink></li>
        <li><NavLink to="/user/hassan" className={changeStyleOnNavigate}>My profile</NavLink></li>
      </ul>

    </nav>
  )
}

export default Navabar

import React from 'react'
import Button from './Button'


const NavBar = () => {
  return (
    <nav>
        <h1 id="logo">React-useContext</h1>
        <ul>
            <li>Home</li>
            <li>My profile</li>
            <li>Contact us</li>
            <Button />
        </ul>
    </nav>
  )
}

export default NavBar

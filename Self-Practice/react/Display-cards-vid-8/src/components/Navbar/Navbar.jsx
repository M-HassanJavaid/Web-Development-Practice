import React from 'react'
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <h1 className='logo'>Hassan's Store</h1>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </nav>
    )
}

export default Navbar

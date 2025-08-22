import React from 'react'

const navbar = (props) => {
  return (
    <nav>
      <div id="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Signup</li>
        <li>Signin</li>
      </ul>
  </nav>
  )
}

export default navbar

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import Navabr from "./components/Navbar/Navabar.jsx"
import Home from "./components/Home/Home.jsx"
import Contact from "./components/Contact/Contact.jsx"
import User from './components/User/User.jsx'
import './App.css'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navabr />
          <Home />
        </>
      )
    },
    {
      path: '/contact',
      element: (
        <>
          <Navabr />
          <Contact />
        </>
      )
    }, {
      path: '/user/:username',
      element: (
        <>
          <Navabr />
          <User/>
        </>
      )
    }
  ])

  return <RouterProvider router={router} />
}

export default App

import NavBar from './components/NavBar'
import { useState } from 'react'
import { userNameContext } from "./context/context"
import './App.css'

function App() {

  const [userName, setuserName] = useState('Hassan')

  return (
    <>
      <userNameContext.Provider value={{userName , setuserName}}>
        <NavBar />
        <input type="text" value={userName} onChange={(e) => { setuserName(e.target.value) }} />
      </userNameContext.Provider>
    </>
  )
}

export default App

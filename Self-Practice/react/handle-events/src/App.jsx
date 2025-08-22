import { useState , useRef } from 'react'
import './App.css'

function App() {

  const clickBtn = useRef()

  const [Form, setForm] = useState({Email : '' , Password : ''}) // a react convention for forms
  
  function handleClick() {
    alert('I am Cliked!')
  }

  function handleHover() {
    clickBtn.current.style.backgroundColor = 'red';
  }

  async function handleInput(e) {
    setForm({...Form , [e.target.name] : e.target.value})
  }

  return (
    <>
      <button onClick={handleClick} ref={clickBtn}>Click Me</button>
      <button onMouseEnter={handleHover}>Hover Me</button>
      <input type="text" name='Email' value={Form.Email} onChange={handleInput}/>
      <input type="text" name='Password' value={Form.Password} onChange={handleInput}/>
    </>
  )
}

export default App

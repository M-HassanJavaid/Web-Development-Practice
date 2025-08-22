import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>The count is {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Click me</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isButtonShow, setIsButtonShow] = useState(false);
  const [todos, settodos] = useState([
    {
      title: 'i am first todo',
      id: 123
    },
    {
      title: 'i am second todo',
      id: 124
    },
    {
      title : 'i am third todo',
      id: 125
    }
  ])

  const Todo = (props)=>{
    return (
      <div className="todoList" >{props.content}</div>
    )

    //you can create a mini component inside a component like this
  }

  return (
    <>
    <ul>
    {todos.map((todo)=> {
      return <li key={todo.id}>{todo.title}</li>
    })}
    </ul>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {isButtonShow && <button>I will appear only once isButtonShow will true;</button>}

      <button onClick={()=>{
        if (isButtonShow) {
          setIsButtonShow(false)
        } else {
          setIsButtonShow(true)
        }
      }}>Click to change isButtonShow!</button>
    </>
  )
}

export default App

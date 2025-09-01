import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState('good');

  // function getAdjective() {
  //   console.log(adjective)
  // }  

  // here if we pass a function as a props in componnent which also wrap in memo. it will also rerender
  // because on every render of app.jsx when javscript compare before props to now props, it will
  // only found that function is not eqaual to before function, because in js function cannot be equal to each other,
  // so here it will think that this props is changed so it will rerender this component

  //* useCallback
  // to solve this problem here useCallback comes in, when we wrap that function which i want to pass as prop,
  // i will wrap it in useCallback, it will freeze that function. after every rerender this func remain same,
  // until that state change which i pass in dependency array

  const getAdjective = useCallback(
    () => {
      console.log(adjective)
    },
    [adjective]  // It 
  )


  return (
    <>
      <Navbar adjective={adjective} setadjective={setadjective} getAdjective={getAdjective} />
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
    </>
  )
}

export default App

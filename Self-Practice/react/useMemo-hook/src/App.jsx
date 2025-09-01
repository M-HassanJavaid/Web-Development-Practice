import { useState , useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

const nums = new Array(30000).fill(0).map((num , i)=>{
  return {
    index: i,
    isMagical: i === 20000,
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setnumbers] = useState(nums);

  // const magicalNumber = numbers.find((num)=> num.isMagical) //Expensive Computation. here we use useMemo to stop some code while rerender componenets

  const magicalNumber = useMemo(()=>{
    return numbers.find((num)=> num.isMagical)
  } , []) // In this dependency array you can pass a state value on which change you want to run this code

  return (
    <>
      <div>
        <span>{magicalNumber.index}</span>
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

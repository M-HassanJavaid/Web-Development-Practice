import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Navbar from './components/navbar';

function App() {
  const [value , setValue] = useState(1)
  return (
    <div className="App">
      <Navbar logoText="DevWithHassan"/>
      <p>{value}</p>
      <button onClick={()=>{setValue(1 + value)}}>Click  to update</button>
    </div>
  );
}

export default App;

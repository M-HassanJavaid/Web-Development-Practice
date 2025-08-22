import { useState , useEffect } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import ProductCard from './components/ProductCard/ProductCard.jsx';


function App() {

  const [Products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res)=> res.json())
    .then((data)=> setProducts(data));
  }, [])
  

  return (
    <>
      <Navbar></Navbar>
      <div id="products-container">
        {
          Products.map((product)=> (
            <ProductCard productInfo={product}></ProductCard>
          ))
        }
      </div>
    </>
  )
}

export default App

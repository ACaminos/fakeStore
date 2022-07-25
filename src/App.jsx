import { useState, useEffect } from 'react'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [producto, setProducto] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
  },[])

  return (
    <div className="App">
        <Header/>
    </div>
  )
}

export default App

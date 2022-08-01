import React from "react"
import {
  BrowserRouter as Router,
  Routes, //Switch ahora con la nueva actualizacion pasa a ser Routes
  Route,
  Link
} from "react-router-dom"
import Home from "./Pages/Home"
import Registro from "./Pages/Registro"
import Login from "./Pages/Login"

function App() {
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/registro" element={<Registro/>} />
          <Route path="/ingresar" element={<Login/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
  }

export default App
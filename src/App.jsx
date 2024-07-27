import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import FeedbackComponent from './components/FeedBackComponent'

import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Confirm from './components/Confirm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/confirm" element={<Confirm/>}/>
        
      </Routes>
  
    </>
  )
}

export default App

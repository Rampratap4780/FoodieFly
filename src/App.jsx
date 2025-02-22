import { useState } from 'react'
import Navbar from './component/Nav'
import HomePage from './component/Home'
import Footer from './component/Footer'
import Manu from './component/Manu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HomePage/>
      <Footer/>

    </>
  )
}

export default App

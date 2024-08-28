import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fruits from './components/Fruits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fruits/>
     </>
  )
}

export default App

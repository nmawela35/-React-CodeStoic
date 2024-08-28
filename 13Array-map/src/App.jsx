import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const array = [1,2,3,4,5]
  return (
  <div>
    <ul>
      {array.map((item) =>{
      return <li key={item}>{item}</li>
    })}
    </ul>
  </div>
  )
}

export default App

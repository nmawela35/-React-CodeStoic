import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'

function App() {
  const person ={
    name:"Chris",
    message: "Hi there",
    seatNumbers: [1,5,7]
  }

  return (
  <div>
    <Hello person={person}/>
  </div>
  )
}

export default App

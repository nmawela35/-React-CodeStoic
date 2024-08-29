import { useState } from 'react'

import './App.css'
import ConditionalComponent from './components/ConditionalComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
 <ConditionalComponent/>
  )
}

export default App

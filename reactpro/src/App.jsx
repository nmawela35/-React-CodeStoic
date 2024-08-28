import { useState } from 'react'

const name="Rob"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {name}
    </div>
  )
}

export default App

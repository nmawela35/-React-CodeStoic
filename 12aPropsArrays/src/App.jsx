import Hello from "./components/Hello"

function App() {
  const seatNumbers =[1,5,6]

  return (
    <div>
      <Hello
      name ="Rob"
      message = "Hi there"
      seatNumber={seatNumbers}
      />
    </div>
  
  )
}

export default App

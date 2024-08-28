import "./App.css";
import Hello from "./components/Hello";


function App() {
  const name = "Chris"
  const surname = "Mawela"

  return <div>
    <Hello name={name} surname={surname}/>
    <Hello name="Cecil" surname="Tshimangadzo"/>
  </div>;
}

export default App;

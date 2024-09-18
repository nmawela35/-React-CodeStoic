import { createContext, useState } from "react";
import Checkout from "../Checkout";
import Login from "./Login";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        <Login />
        <Checkout />
      </userContext.Provider>
    </div>
  );
}

export default App;

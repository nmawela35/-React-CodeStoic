import { createContext, useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Login />
        <Checkout />
      </UserContext.Provider>
    </div>
  );
}

export default App;

import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount,setAmount] =useState(0)

  function reducer(state,action) {
    if (action.type == "deposit"){
      return {...state,balance:state.balance+action.payload}
    }
    if (action.type == "withdraw"){
      return {...state,balance:state.balance - action.payload}
    }
  }

  return (
    <div>
      <p>{state.balance}</p>
      <input type="number" value={amount} onChange={(e) =>setAmount(e.target.value)}/>
      <button onClick={() =>dispatch({type:"deposit", payload: Number(amount)})}>Deposit</button>
      <button onClick={() =>dispatch({type:"withdraw",payload:Number(amount)})}>Withdraw</button>
    </div>
  )
}

export default App;

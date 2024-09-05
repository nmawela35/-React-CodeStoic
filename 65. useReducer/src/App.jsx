import { useReducer, useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const [state,dispatch] = useReducer(reducer,4)

  // const initValue=0

function reducer(state,action){
  if (action.type === 'increment'){
    return state + action.payload
  } 
  if (action.type == 'decrement'){
    return state - 2
}

}

function increase(){
  setCount(count+1)
}
function decrease(){
  setCount(count-1)
}


  return (
    <div className="App">

      <h1>Use State{" "}{count}</h1>
      <button onClick={()=>increase()}>Increase</button>
      <button onClick={() =>decrease()}>Decrease</button>

      <h1>Use Reducer {" "}{state}</h1>
      <button onClick={() =>dispatch({type:"increment", payload:10})}>Increment</button>
      <button onClick={() =>dispatch({type:"decrement",payload:3})}>Decrement</button>



    </div>
  )
}

export default App

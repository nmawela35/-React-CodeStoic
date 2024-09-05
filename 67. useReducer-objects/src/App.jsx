import { useReducer} from 'react';

function App() {
  const [state,dispatch] = useReducer(reducer,{count:0,incrementBy:5})

function reducer(state,action){
  if (action.type === 'increment'){
    return {...state,count:state.count+ state.incrementBy}
  } 
  if (action.type == 'decrement'){
    return {...state,count:state.count- state.incrementBy}
  }
  if (action.type=="setIncrement"){
    return {...state,incrementBy:action.payload}
  }

  }


  return (
    <div className="App">


      <h1>Use Reducer {" "}{state.count}</h1>
      <input type="text" value={state.incrementBy} onChange={(e)=>dispatch({type:"setIncrement",payload:Number(e.target.value)})}/>
      <button onClick={() =>dispatch({type:"increment"})}>Increment</button>
      <button onClick={() =>dispatch({type:"decrement"})}>Decrement</button>

    </div>
  )
}

export default App

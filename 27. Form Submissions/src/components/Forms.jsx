import React, { useState } from 'react'


function Forms() {
  const [name,setName] = useState({firstName:"",lastName:""});
  console.log(name.firstName, name.lastName)

  // function handleChange(e){
  //   setName(e.target.value)
  //   // console.log(e.target)
  // }

  function handlesubmit(e){
    e.preventDefault()
    console.log(name)
  }


  return (
    <div>
      {name.firstName}{" "} {name.lastName}
     <form>
      <input type="text" onChange={(e) =>setName({...name,firstName: e.target.value})} value={name.firstName}/>
      <input type="text" onChange={(e) =>setName({...name,lastName: e.target.value})} value={name.lastName}/>
      <button onClick={(e) =>handlesubmit(e)}>Submit</button>
      </form> 
    </div>
  )
}

export default Forms
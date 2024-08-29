import React, { useState } from 'react'


function Forms() {
  const [name,setName] = useState("");

  // function handleChange(e){
  //   setName(e.target.value)
  //   // console.log(e.target)
  // }

  return (
    <div>
     <form>
      <input type="text" onChange={(e) =>setName(e.target.value)} value={name}/>
      </form> 
    </div>
  )
}

export default Forms
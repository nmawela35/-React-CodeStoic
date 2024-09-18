import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate()
  const [user,setUser] =useState("")

  function handleClick(){
    navigate("dashboard/profile",{state:{user}} )
  }

  return (
    <div>
      <h1>This is a Homepage</h1>
      <input value={user} onChange={(e) =>setUser(e.target.value)} />
      <button onClick={handleClick}>Go to profile page</button>
    </div>
  );
}

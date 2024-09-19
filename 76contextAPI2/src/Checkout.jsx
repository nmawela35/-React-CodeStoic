import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export default function Checkout() {

   const {user} = useContext(UserContext)

  return (
    <h1>Checkout {user}</h1>
  )
}

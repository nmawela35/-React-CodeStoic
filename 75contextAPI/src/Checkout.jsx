import { useContext } from "react"
import { UserContext } from "./App"

export default function Checkout() {

   const {user} = useContext(UserContext)

  return (
    <h1>Checkout {user}</h1>
  )
}

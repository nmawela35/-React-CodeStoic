import { useContext } from "react"
import { userContext } from "./src/App"

export default function Checkout() {

   const {user} = useContext(userContext)


  return (
    <h1>Checkout {user}</h1>
  )
}

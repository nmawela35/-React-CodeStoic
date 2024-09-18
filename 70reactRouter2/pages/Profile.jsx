import { useLocation } from "react-router-dom"

export default function Profile() {
const location =useLocation()
const {user} =location.state || {}

  return (
    <div>

    <h2>Your Profile</h2>
    <p>Profile for {user}</p>
    </div>
  )
}

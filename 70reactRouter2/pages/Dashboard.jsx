import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>This is a Dashboard</h1>
      <ul>
        <li>
          <Link to="settings">Settings</Link>
        </li>
        <li>
          <Link to="profile">Profile</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Nav from "../Nav";
import Footer from "../pages/Footer";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Products from '../pages/Products'

export default function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products/:id" element={<Products/>}/>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

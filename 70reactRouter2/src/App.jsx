import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

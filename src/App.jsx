import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import OwnerLogin from "./pages/OwnerLogin.jsx";
import DriverLogin from "./pages/DriverLogin.jsx";
import CompanyLogin from "./pages/CompanyLogin.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/owner" element={<OwnerLogin />} />
        <Route path="/login/driver" element={<DriverLogin />} />
        <Route path="/login/company" element={<CompanyLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

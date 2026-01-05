import { Routes, Route } from "react-router-dom";
import RoleSelect from "./pages/RoleSelect";
import AdminLogin from "./pages/auth/AdminLogin";
import AdminRegister from "./pages/auth/AdminRegister";
import UserLogin from "./pages/auth/UserLogin";
import UserRegister from "./pages/auth/UserRegister";
import Dashboard from "./pages/admin/Dashboard";
import Requests from "./pages/admin/Requests";
import Payments from "./pages/admin/Payments";
import Statistics from "./pages/admin/Statistics";
import Performance from "./pages/user/Performance";
import Conditions from "./pages/user/Conditions";
import Alerts from "./pages/user/Alerts";
import Maintenance from "./pages/user/Maintenance";
import Analytics from "./components/userDashboard/analytics/Analytics";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";


export default function App() {
  return (
    <Routes>
      {/* ADMIN ROUTES */}
      <Route path="/" element={<RoleSelect />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/requests" element={<Requests />} />
      <Route path="/admin/payments" element={<Payments />} />
      <Route path="/admin/statistics" element={<Statistics />} />

      {/* USER ROUTES*/}
      <Route path="/performance" element={<Performance />} /> 
      <Route path="/conditions" element={<Conditions />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} /> 

    </Routes>
  );
}


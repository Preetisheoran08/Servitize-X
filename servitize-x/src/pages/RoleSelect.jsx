import { useNavigate } from "react-router-dom";
import RoleCard from "../components/auth/RoleCard";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-white">
      <h1 className="text-3xl font-bold text-blue-800">
        Servitize<span className="text-sky-500">X</span>
      </h1>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Hi! Welcome.
        </h2>
        <p className="text-gray-500 mt-1">
          Help us personalise your experience. Select one only.
        </p>
      </div>

      <div className="flex gap-12">
        <RoleCard title="Admin" onClick={() => navigate("/admin/login")} />
        <RoleCard title="User" onClick={() => navigate("/user/login")} />
      </div>
    </div>
  );
}

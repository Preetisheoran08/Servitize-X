import { useLocation } from "react-router-dom";

export default function TopBar() {
  const location = useLocation();

  const isDashboard = location.pathname === "/admin/dashboard";

  return (
    <header className="h-14 flex items-center justify-between px-6 bg-[#27348B] text-white">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-2 text-sm font-medium">
        {isDashboard && (
          <>
            🏠 <span>Dashboard</span>
          </>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 text-sm">
        <div className="text-right">
          <div className="font-medium">Admin Name</div>
          <div className="text-xs text-[#BFD4FF]">Admin Role</div>
        </div>

        <div className="w-9 h-9 rounded-full bg-[#16B5E8] flex items-center justify-center text-white font-semibold">
          A
        </div>
      </div>
    </header>
  );
}

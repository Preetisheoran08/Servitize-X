import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass =
    "flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition";

  const activeClass =
    "bg-[#16B5E8] text-white";

  const inactiveClass =
    "text-gray-800 hover:bg-gray-100";

  return (
    <aside className="w-64 bg-white border-r flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="px-6 py-5 text-2xl font-bold text-[#27348B]">
          Servitize{" "}
          <span className="relative text-[#16B5E8]">
            X
            <span className="absolute -top-2 -right-2 text-sm">↗</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-1 px-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            🏠 Dashboard
          </NavLink>

          <NavLink to="/admin/requests" className={`${linkClass} ${inactiveClass}`}>
            📄 Requests
          </NavLink>

          <NavLink to="/admin/payments" className={`${linkClass} ${inactiveClass}`}>
            💳 Payments
          </NavLink>

          <NavLink to="/admin/statistics" className={`${linkClass} ${inactiveClass}`}>
            📊 Statistics
          </NavLink>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="px-2 pb-4 space-y-1">
        <div className={`${linkClass} ${inactiveClass}`}>🔔 Notifications</div>
        <div className={`${linkClass} ${inactiveClass}`}>❓ Help</div>
        <div className={`${linkClass} ${inactiveClass}`}>⚙ Settings</div>

        <div className="border-t mt-2 pt-2">
          <div className={`${linkClass} text-red-600 hover:bg-red-50`}>
            ⏻ Log Out
          </div>
        </div>
      </div>
    </aside>
  );
}

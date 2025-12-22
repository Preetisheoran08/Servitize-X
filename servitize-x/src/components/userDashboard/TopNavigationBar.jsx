import { NavLink } from "react-router-dom";
import soneparLogo from "../../assets/sonepar-logo.png";

const navItemClass = ({ isActive }) =>
  `pb-1 cursor-pointer transition ${
    isActive
      ? "border-b-2 border-[#16B5E8] text-white"
      : "opacity-80 hover:opacity-100"
  }`;

export default function TopNavigationBar() {
  return (
    <header className="h-18 bg-[#27348B] text-white flex items-center justify-between px-8">
      
      
      <div className="text-xl font-bold tracking-wide flex items-center gap-1">
        Servitize
        <span className="relative text-[#16B5E8] font-extrabold">
          X
          <span className="absolute -top-2 -right-2 text-xs">↗</span>
        </span>
      </div>

      <nav className="flex gap-8 text-sm font-medium">
        <NavLink to="/performance" className={navItemClass}>
          Performance
        </NavLink>

        <NavLink
  to="/conditions"
  className={({ isActive }) =>
    `pb-1 ${
      isActive
        ? "border-b-2 border-[#16B5E8]"
        : "opacity-80"
    }`
  }
>
  Conditions
</NavLink>

        <NavLink to="/alerts" className={navItemClass}>
          Alerts
        </NavLink>
        <NavLink to="/maintenance" className={navItemClass}>
          Maintenance
        </NavLink>
        <NavLink to="/analytics" className={navItemClass}>
          Analytics
        </NavLink>
        <NavLink to="/about" className={navItemClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={navItemClass}>
          Contact
        </NavLink>
      </nav>

      <div className="flex items-center">
        <img
          src={soneparLogo}
          alt="Sonepar"
          className="h-11 object-contain"
        />
      </div>
    </header>
  );
}

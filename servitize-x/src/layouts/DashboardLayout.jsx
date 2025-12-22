import Sidebar from "../components/sidebar/Sidebar";
import TopBar from "../components/header/TopBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-[#27348B]">
      <Sidebar /> 

      <div className="flex-1 flex flex-col">
       
        <TopBar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

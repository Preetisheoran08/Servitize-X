import TopNavigationBar from "../components/userDashboard/TopNavigationBar";
import FooterTrademark from "../components/userDashboard/content/FooterTrademark";

export default function UserDashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#27348B]">
      <TopNavigationBar />

      <div className="flex-1 bg-gray-50 overflow-hidden">
        <main className="h-full bg-white overflow-y-auto">
          {children}
          <FooterTrademark />
        </main>
      </div>
    </div>
  );
}

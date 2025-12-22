import UserDashboardLayout from "../../layouts/UserDashboardLayout";

export default function About() {
  return (
    <UserDashboardLayout>
      <div className="min-h-[calc(100vh-72px)] flex border border-[#16B5E8]">


        <div className="w-1/2 bg-white relative flex items-center justify-center">


          <div className="text-5xl font-bold text-[#27348B]">
            Servitize
            <span className="text-[#16B5E8] font-extrabold ml-1">X</span>
          </div>


          <p className="absolute bottom-6 text-xs text-gray-500">
            © Designed & Developed by Sonepar India Pvt. Ltd.
          </p>
        </div>
        
        
        <div className="w-1/2 bg-[#27348B] text-white p-14 flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-[#16B5E8] mb-10 text-right">
            ABOUT
          </h1>

          <p className="text-sm leading-relaxed max-w-md ml-auto text-justify">
            Servitize X is a unified industrial intelligence platform that
            transforms machine data into operational clarity. Designed for
            manufacturing and enterprise environments, it delivers real-time
            visibility into equipment performance, production efficiency, and
            system health.
            <br /><br />
            By integrating data across plants, lines and assets, Servitize X
            empowers organizations to detect faults early, minimize downtime
            and optimize productivity with precision. Scalable, adaptive and
            data-driven — Servitize X redefines how industries connect with
            their machines.
          </p>
        </div>

      </div>
    </UserDashboardLayout>
  );
}

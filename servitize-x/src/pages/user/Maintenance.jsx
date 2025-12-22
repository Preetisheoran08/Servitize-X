import UserDashboardLayout from "../../layouts/UserDashboardLayout";
import BreadcrumbInfo from "../../components/userDashboard/content/BreadcrumbInfo";

export default function Maintenance() {
  return (
    <UserDashboardLayout>
      <div className="flex w-full px-8 py-6">
        <section className="flex-1">
       
          <BreadcrumbInfo
            plantName="Plant / Site 1"
            machineTypeName="Bottling Lines"
            lineName="Line 1"
          />


          <h2 className="text-2xl font-semibold text-[#27348B] mb-6">
            Maintenance Overview
          </h2>


          <div className="grid grid-cols-4 gap-6 mb-10">
            <MaintenanceCard title="Scheduled" value={6} color="blue" />
            <MaintenanceCard title="In Progress" value={2} color="yellow" />
            <MaintenanceCard title="Overdue" value={1} color="red" />
            <MaintenanceCard title="Completed" value={18} color="green" />
          </div>

        
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-[#27348B]">
              Maintenance Tasks
            </h3>

            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="text-left py-2">Task ID</th>
                  <th className="text-left py-2">Machine</th>
                  <th className="text-left py-2">Task Type</th>
                  <th className="text-left py-2">Priority</th>
                  <th className="text-left py-2">Due Date</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>

              <tbody>
                <MaintenanceRow
                  id="MT-1021"
                  machine="Line 1"
                  type="Bearing Replacement"
                  priority="High"
                  due="Today"
                  status="Overdue"
                />
                <MaintenanceRow
                  id="MT-1022"
                  machine="Line 2"
                  type="Routine Inspection"
                  priority="Medium"
                  due="Tomorrow"
                  status="Scheduled"
                />
                <MaintenanceRow
                  id="MT-1018"
                  machine="Line 3"
                  type="Lubrication"
                  priority="Low"
                  due="Completed"
                  status="Completed"
                />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </UserDashboardLayout>
  );
}



function MaintenanceCard({ title, value, color }) {
  const colorMap = {
    blue: "text-blue-600",
    yellow: "text-yellow-500",
    red: "text-red-600",
    green: "text-green-600",
  };

  return (
    <div className="bg-white rounded shadow p-5">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <p className={`text-2xl font-semibold ${colorMap[color]}`}>
        {value}
      </p>
    </div>
  );
}

function MaintenanceRow({ id, machine, type, priority, due, status }) {
  const statusColor =
    status === "Overdue"
      ? "bg-red-500"
      : status === "Scheduled"
      ? "bg-blue-500"
      : status === "Completed"
      ? "bg-green-500"
      : "bg-yellow-400";

  return (
    <tr className="border-b last:border-none">
      <td className="py-2">{id}</td>
      <td className="py-2">{machine}</td>
      <td className="py-2">{type}</td>
      <td className="py-2">{priority}</td>
      <td className="py-2">{due}</td>
      <td className="py-2">
        <span
          className={`inline-block w-3 h-3 rounded-full ${statusColor}`}
          title={status}
        />
      </td>
    </tr>
  );
}

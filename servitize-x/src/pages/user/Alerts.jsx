import UserDashboardLayout from "../../layouts/UserDashboardLayout";
import BreadcrumbInfo from "../../components/userDashboard/content/BreadcrumbInfo";

export default function Alerts() {
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
            Alerts & Notifications
          </h2>


          <div className="grid grid-cols-4 gap-6 mb-10">
            <AlertSummaryCard title="Critical" count={3} color="red" />
            <AlertSummaryCard title="Warnings" count={5} color="yellow" />
            <AlertSummaryCard title="Info" count={8} color="blue" />
            <AlertSummaryCard title="Resolved" count={12} color="green" />
          </div>
          

          <div className="bg-white rounded shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-[#27348B]">
              Active Alerts
            </h3>

            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="text-left py-2">Time</th>
                  <th className="text-left py-2">Machine</th>
                  <th className="text-left py-2">Alert Type</th>
                  <th className="text-left py-2">Severity</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>

              <tbody>
                <AlertRow
                  time="10:42 AM"
                  machine="Line 1"
                  type="Overheating"
                  severity="critical"
                  status="Active"
                />
                <AlertRow
                  time="09:30 AM"
                  machine="Line 2"
                  type="Vibration Spike"
                  severity="warning"
                  status="Active"
                />
                <AlertRow
                  time="Yesterday"
                  machine="Line 3"
                  type="Power Fluctuation"
                  severity="info"
                  status="Resolved"
                />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </UserDashboardLayout>
  );
}


function AlertSummaryCard({ title, count, color }) {
  const colorMap = {
    red: "text-red-600",
    yellow: "text-yellow-500",
    blue: "text-blue-600",
    green: "text-green-600",
  };

  return (
    <div className="bg-white rounded shadow p-5">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <p className={`text-2xl font-semibold ${colorMap[color]}`}>
        {count}
      </p>
    </div>
  );
}

function AlertRow({ time, machine, type, severity, status }) {
  const severityColor =
    severity === "critical"
      ? "bg-red-500"
      : severity === "warning"
      ? "bg-yellow-400"
      : "bg-blue-500";

  return (
    <tr className="border-b last:border-none">
      <td className="py-2">{time}</td>
      <td className="py-2">{machine}</td>
      <td className="py-2">{type}</td>
      <td className="py-2">
        <span
          className={`inline-block w-3 h-3 rounded-full ${severityColor}`}
          title={severity}
        />
      </td>
      <td className="py-2">{status}</td>
    </tr>
  );
}

import UserDashboardLayout from "../../layouts/UserDashboardLayout";
import BreadcrumbInfo from "../../components/userDashboard/content/BreadcrumbInfo";

export default function Conditions() {
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
            Machine Conditions
          </h2>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <ConditionCard
              title="Temperature"
              value="68°C"
              status="warning"
            />
            <ConditionCard
              title="Vibration"
              value="Normal"
              status="good"
            />
            <ConditionCard
              title="Pressure"
              value="4.2 bar"
              status="good"
            />
          </div>

          <div className="bg-white rounded shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-[#27348B]">
              Live Condition Parameters
            </h3>

            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="text-left py-2">Parameter</th>
                  <th className="text-left py-2">Value</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>

              <tbody>
                <ConditionRow
                  parameter="Motor Temperature"
                  value="68°C"
                  status="warning"
                />
                <ConditionRow
                  parameter="Bearing Vibration"
                  value="Low"
                  status="good"
                />
                <ConditionRow
                  parameter="Hydraulic Pressure"
                  value="4.2 bar"
                  status="good"
                />
                <ConditionRow
                  parameter="Power Consumption"
                  value="High"
                  status="error"
                />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </UserDashboardLayout>
  );
}


function ConditionCard({ title, value, status }) {
  const color =
    status === "good"
      ? "text-green-600"
      : status === "warning"
      ? "text-yellow-500"
      : "text-red-600";

  return (
    <div className="bg-white rounded shadow p-5">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <p className={`text-2xl font-semibold ${color}`}>{value}</p>
    </div>
  );
}

function ConditionRow({ parameter, value, status }) {
  const statusColor =
    status === "good"
      ? "bg-green-500"
      : status === "warning"
      ? "bg-yellow-400"
      : "bg-red-500";

  return (
    <tr className="border-b last:border-none">
      <td className="py-2">{parameter}</td>
      <td className="py-2">{value}</td>
      <td className="py-2">
        <span
          className={`inline-block w-3 h-3 rounded-full ${statusColor}`}
          title={status}
        />
      </td>
    </tr>
  );
}

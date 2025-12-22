export default function PerformanceSummary({ summary }) {
  if (!summary) return null;

  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4 text-[#27348B]">
        Overall Performance Summary
      </h2>

      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
        <div>
          <span className="font-medium">Operational Status:</span>{" "}
          {summary.status}
        </div>

        <div>
          <span className="font-medium">Performance Efficiency:</span>{" "}
          {summary.efficiency}%
        </div>

        <div>
          <span className="font-medium">Utilization Rate:</span>{" "}
          {summary.utilization}%
        </div>

        <div>
          <span className="font-medium">Shift Output:</span>{" "}
          {summary.output?.toLocaleString()} bottles
        </div>

        <div>
          <span className="font-medium">Target Output:</span>{" "}
          {summary.target?.toLocaleString()} bottles
        </div>

        <div>
          <span className="font-medium">Downtime:</span>{" "}
          {summary.downtime} minutes
        </div>

        <div>
          <span className="font-medium">Uptime:</span>{" "}
          {summary.uptime}%
        </div>
      </div>
    </div>
  );
}

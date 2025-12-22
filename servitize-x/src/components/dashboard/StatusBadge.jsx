export default function StatusBadge({ status }) {
  const statusConfig = {
    ACTIVE: {
      text: "Active",
      color: "bg-green-500",
    },
    INACTIVE: {
      text: "Inactive",
      color: "bg-red-500",
    },
    PIPELINE: {
      text: "Pipeline",
      color: "bg-yellow-400",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`w-2.5 h-2.5 rounded-full ${config.color}`} />
      <span className="text-gray-700">{config.text}</span>
    </div>
  );
}

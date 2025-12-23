export default function StatusBadge({ status }) {
  const STATUS_MAP = {
    ACTIVE: {
      label: "Active",
      color: "bg-green-100 text-green-700",
    },
    INACTIVE: {
      label: "Inactive",
      color: "bg-gray-100 text-gray-600",
    },
    PENDING: {
      label: "Pending",
      color: "bg-yellow-100 text-yellow-700",
    },
    SUSPENDED: {
      label: "Suspended",
      color: "bg-red-100 text-red-700",
    },
  };

  // 🔒 Normalize & fallback
  const safeStatus = status?.toUpperCase();
  const config = STATUS_MAP[safeStatus] || {
    label: "Unknown",
    color: "bg-gray-100 text-gray-500",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${config.color}`}
    >
      {config.label}
    </span>
  );
}

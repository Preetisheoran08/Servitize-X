export default function PaymentStatusBadge({ status }) {
  const map = {
    PAID: "bg-green-500",
    PENDING: "bg-yellow-400",
    FAILED: "bg-red-500",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded text-xs text-black ${map[status]}`}
    >
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </span>
  );
}

export default function ConnectionStatusIcon({ status }) {
  let colorClass = "bg-gray-300";

  if (status === "good" || status === "ok") {
    colorClass = "bg-green-500";
  } else if (status === "weak" || status === "warning") {
    colorClass = "bg-yellow-400";
  } else if (status === "error") {
    colorClass = "bg-red-500";
  }

  return (
    <span
      className={`w-3 h-3 rounded-full inline-block ${colorClass}`}
      title={status}
    />
  );
}

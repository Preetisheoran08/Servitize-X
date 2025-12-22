export default function MachineHealthIcon({ health }) {
  let colorClass = "bg-gray-300"; 

  if (health === "good" || health === "ok") {
    colorClass = "bg-green-500";
  } else if (health === "warning") {
    colorClass = "bg-yellow-400";
  } else if (health === "error") {
    colorClass = "bg-red-500";
  }

  return (
    <span
      className={`w-3 h-3 rounded-full inline-block ${colorClass}`}
      title={health}
    />
  );
}

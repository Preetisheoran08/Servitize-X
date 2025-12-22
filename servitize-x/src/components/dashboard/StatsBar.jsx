function StatCard({ label, value, color }) {
  return (
    <div className="flex-1 bg-white rounded-md px-4 py-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`text-xl font-semibold ${color}`}>
        {value}
      </p>
    </div>
  );
}

export default function StatsBar({ customers }) {
  const total = customers.length;
  const active = customers.filter(c => c.status === "ACTIVE").length;
  const pipeline = customers.filter(c => c.status === "PIPELINE").length;
  const inactive = customers.filter(c => c.status === "INACTIVE").length;

  return (
    <div className="flex gap-4 mb-6">
      <StatCard label="Total Customers" value={total} color="text-[#27348B]" />
      <StatCard label="Active Customers" value={active} color="text-green-600" />
      <StatCard label="Pipeline Customers" value={pipeline} color="text-yellow-600" />
      <StatCard label="Inactive Customers" value={inactive} color="text-red-600" />
    </div>
  );
}


export default function StatsCard({ label, value }) {
  return (
    <div className="bg-white rounded-md p-4 text-center shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-semibold text-[#27348B] mt-1">
        {value}
      </div>
    </div>
  );
}

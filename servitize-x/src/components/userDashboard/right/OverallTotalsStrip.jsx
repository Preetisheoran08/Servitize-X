export default function OverallTotalsStrip({ totals }) {
  if (!totals) return null;

  const {
    output = 0,
    downtime = 0,
    efficiency = 0,
  } = totals;

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
        <p className="text-xs text-gray-500 mb-1">
          Total Output
        </p>
        <p className="text-xl font-semibold text-[#27348B]">
          {output.toLocaleString()} Bottles
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
        <p className="text-xs text-gray-500 mb-1">
          Downtime
        </p>
        <p className="text-xl font-semibold text-[#27348B]">
          {downtime} min
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
        <p className="text-xs text-gray-500 mb-1">
          Avg Efficiency
        </p>
        <p className="text-xl font-semibold text-[#27348B]">
          {efficiency}%
        </p>
      </div>
    </div>
  );
}

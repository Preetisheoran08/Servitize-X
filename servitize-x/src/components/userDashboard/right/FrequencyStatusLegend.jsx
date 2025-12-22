export default function FrequencyStatusLegend() {
  return (
    <div className="flex items-center gap-6 text-xs text-gray-600 font-medium">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
        Normal Operation
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
        Warning Threshold
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
        Error / Disconnected
      </div>
    </div>
  );
}

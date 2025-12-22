export default function ProgressIndicator({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#16B5E8] to-[#683e82]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

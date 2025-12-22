export default function KPIWidgetCard({ title = "", value = "—", color }) {
  return (
    <div className="bg-white rounded-lg shadow-sm px-5 py-4 w-44 min-h-[92px] flex flex-col justify-between">
      <p className="text-xs text-gray-500 tracking-wide">
        {title}
      </p>

      <p
        className="text-2xl font-bold leading-tight"
        style={{ color }}
      >
        {value}
      </p>
    </div>
  );
}

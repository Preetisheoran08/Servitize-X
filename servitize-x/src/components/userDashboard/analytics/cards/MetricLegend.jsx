export default function MetricLegend({ items }) {
  return (
    <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
      {items.map(item => (
        <div key={item.label} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          {item.label}
        </div>
      ))}
    </div>
  );
}

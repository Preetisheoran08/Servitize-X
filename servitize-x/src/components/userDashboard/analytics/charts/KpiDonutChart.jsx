import { PieChart, Pie, Cell } from "recharts";

export default function KpiDonutChart({ label, value, color }) {
  const data = [
    { name: "Achieved", value },
    { name: "Remaining", value: 100 - value },
  ];

  return (
    <div className="flex flex-col items-center">
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          innerRadius={45}
          outerRadius={55}
          dataKey="value"
        >
          <Cell fill={color} />
          <Cell fill="#e5e7eb" />
        </Pie>
      </PieChart>
      <p className="text-lg font-semibold">{value}%</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

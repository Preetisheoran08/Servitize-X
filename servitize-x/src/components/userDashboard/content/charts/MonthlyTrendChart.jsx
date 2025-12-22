import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyTrendChart({ data }) {
  if (!data || !data.length) {
    return (
      <div className="text-sm text-gray-400">
        No monthly trend data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} barCategoryGap={24}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          formatter={(value) => [
            value?.toLocaleString(),
            "Output",
          ]}
        />
        <Bar
          dataKey="output"
          fill="#ee7203"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

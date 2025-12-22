import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyOutputChart({ data }) {
  if (!data || !data.length) {
    return (
      <div className="text-sm text-gray-400">
        No monthly output data available
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Monthly Output Trend
      </h3>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barCategoryGap={22}>
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
    </div>
  );
}

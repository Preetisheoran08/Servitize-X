import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function HorizontalBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 40 }}
      >
        <XAxis
          type="number"
          tick={{ fontSize: 12 }}
          stroke="#6b7280"
        />

        <YAxis
          type="category"
          dataKey="label"
          tick={{ fontSize: 12 }}
          stroke="#6b7280"
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
          }}
        />

        <Bar
          dataKey="value"
          fill="#16B5E8"
          radius={[0, 6, 6, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

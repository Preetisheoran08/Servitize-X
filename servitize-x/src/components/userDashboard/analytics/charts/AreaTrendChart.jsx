import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function AreaTrendChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

        <XAxis
          dataKey="month"
          tick={{ fontSize: 12 }}
          stroke="#6b7280"
        />

        <YAxis
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

        <Area
          type="monotone"
          dataKey="output"
          stroke="#ee7203"
          fill="#ee7203"
          fillOpacity={0.25}
          strokeWidth={2}
        />

        <Area
          type="monotone"
          dataKey="efficiency"
          stroke="#683e82"
          fill="#683e82"
          fillOpacity={0.25}
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

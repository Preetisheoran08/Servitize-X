import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function MultiSeriesChart({ data }) {
  if (!data || !data.length) {
    return (
      <div className="text-sm text-gray-400">
        No performance data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={data}
        barGap={4}
        barCategoryGap={18}
      >
        <XAxis dataKey="shift" />
        <YAxis />
        <Tooltip
          formatter={(value, name) => {
            if (name === "throughput") return [`${value}`, "Throughput"];
            if (name === "downtime") return [`${value} min`, "Downtime"];
            return [`${value}%`, name.charAt(0).toUpperCase() + name.slice(1)];
          }}
        />
        <Legend />

        <Bar dataKey="efficiency" fill="#683e82" radius={[4, 4, 0, 0]} />
        <Bar dataKey="utilization" fill="#009ee3" radius={[4, 4, 0, 0]} />
        <Bar dataKey="throughput" fill="#ee7203" radius={[4, 4, 0, 0]} />
        <Bar dataKey="downtime" fill="#f3c200" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

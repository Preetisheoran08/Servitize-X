import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceFrequencyChart({ data }) {
  if (!data || !data.length) {
    return (
      <div className="text-sm text-gray-400">
        No frequency data available
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Frequency Distribution
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          barCategoryGap={20}
        >
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip
            formatter={(value, name) => {
              const label =
                name === "normal"
                  ? "Normal"
                  : name === "warning"
                  ? "Warning"
                  : "Error";
              return [`${value}`, label];
            }}
          />

          <Bar
            dataKey="normal"
            stackId="a"
            fill="#16a34a"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="warning"
            stackId="a"
            fill="#facc15"
          />
          <Bar
            dataKey="error"
            stackId="a"
            fill="#dc2626"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

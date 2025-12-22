import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RequestsLineChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-md h-72">
      <h3 className="text-sm font-medium mb-2">Requests Trend</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="requests" stroke="#27348B" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

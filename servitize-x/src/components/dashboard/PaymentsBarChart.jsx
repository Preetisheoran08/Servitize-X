import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PaymentsBarChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-md h-72">
      <h3 className="text-sm font-medium mb-2">Payments Overview</h3>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#16B5E8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

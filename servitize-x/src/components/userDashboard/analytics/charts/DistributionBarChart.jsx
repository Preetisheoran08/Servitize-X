import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function DistributionBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data}>
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="normal" stackId="a" fill="#16a34a" />
        <Bar dataKey="warning" stackId="a" fill="#facc15" />
        <Bar dataKey="error" stackId="a" fill="#dc2626" />
      </BarChart>
    </ResponsiveContainer>
  );
}

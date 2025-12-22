import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function MultiLineTrendChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line dataKey="output" stroke="#ee7203" strokeWidth={2} />
        <Line dataKey="efficiency" stroke="#683e82" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#16B5E8", "#FACC15", "#EF4444"];

export default function CustomerStatusPie({ data }) {
  return (
    <div className="bg-white p-4 rounded-md h-72">
      <h3 className="text-sm font-medium mb-2">Customer Status</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";

const data = [
  { metric: "Availability", value: 85 },
  { metric: "Performance", value: 78 },
  { metric: "Quality", value: 92 },
  { metric: "Energy", value: 70 },
  { metric: "Safety", value: 88 },
];

export default function RadarPerformanceChart() {
  return (
    <RadarChart width={300} height={260} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="metric" />
      <PolarRadiusAxis />
      <Radar
        dataKey="value"
        fill="#683e82"
        fillOpacity={0.6}
        stroke="#683e82"
      />
    </RadarChart>
  );
}

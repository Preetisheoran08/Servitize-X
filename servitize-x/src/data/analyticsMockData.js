export const kpiDonutData = [
  {
    label: "Availability",
    value: 92,
    color: "#009ee3",
  },
  {
    label: "Performance",
    value: 88,
    color: "#683e82",
  },
  {
    label: "Quality",
    value: 95,
    color: "#047d5c",
  },
];


export const trendData = [
  { month: "Jan", output: 720000, efficiency: 91 },
  { month: "Feb", output: 695000, efficiency: 89 },
  { month: "Mar", output: 740000, efficiency: 93 },
  { month: "Apr", output: 760000, efficiency: 94 },
  { month: "May", output: 780000, efficiency: 95 },
  { month: "Jun", output: 810000, efficiency: 96 },
];


export const frequencyDistributionData = [
  { range: "0–20%", normal: 5, warning: 2, error: 1 },
  { range: "20–40%", normal: 8, warning: 3, error: 2 },
  { range: "40–60%", normal: 12, warning: 4, error: 3 },
  { range: "60–80%", normal: 15, warning: 5, error: 4 },
  { range: "80–100%", normal: 20, warning: 3, error: 2 },
];


export const downtimeCauseData = [
  { label: "Mechanical Failure", value: 42 },
  { label: "Power Loss", value: 28 },
  { label: "Human Error", value: 15 },
  { label: "Material Shortage", value: 10 },
  { label: "Software Fault", value: 5 },
];


export const radarPerformanceData = [
  {
    metric: "Efficiency",
    value: 92,
    max: 100,
  },
  {
    metric: "Utilization",
    value: 88,
    max: 100,
  },
  {
    metric: "Availability",
    value: 94,
    max: 100,
  },
  {
    metric: "Quality",
    value: 96,
    max: 100,
  },
  {
    metric: "Reliability",
    value: 90,
    max: 100,
  },
];


export const forecastData = [
  { month: "Jul", predicted: 830000 },
  { month: "Aug", predicted: 860000 },
  { month: "Sep", predicted: 900000 },
  { month: "Oct", predicted: 940000 },
];

/* ---------------- OVERALL SUMMARY ---------------- */
export const analyticsSummary = {
  totalOutput: 4_505_000,
  avgEfficiency: 93.2,
  avgUtilization: 89.6,
  downtimeHours: 72,
  activeLines: 14,
};

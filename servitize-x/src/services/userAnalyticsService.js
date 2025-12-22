export const getAnalyticsForLine = (lineId) => {
  const degraded = lineId?.includes("1");

  return {
    frequencyData: [
      { range: "0–20%", normal: 5, warning: 2, error: degraded ? 3 : 1 },
      { range: "20–40%", normal: 8, warning: 3, error: degraded ? 4 : 1 },
      { range: "40–60%", normal: 12, warning: 4, error: degraded ? 6 : 2 },
      { range: "60–80%", normal: 15, warning: 5, error: degraded ? 7 : 2 },
      { range: "80–100%", normal: 20, warning: 3, error: degraded ? 5 : 1 },
    ],

    totals: {
      output: degraded ? 1180000 : 1425000,
      downtime: degraded ? 72 : 28,
      efficiency: degraded ? 86.4 : 93.1,
    },

    summary: {
      status: degraded ? "Attention Required" : "Active",
      efficiency: degraded ? 78.4 : 93.6,
      utilization: degraded ? 70.2 : 88.9,
      output: degraded ? 18200 : 28450,
      target: 31800,
      downtime: degraded ? 48 : 12,
      uptime: degraded ? 92.1 : 98.3,
    },

    analytics: {
      shiftMetrics: [
        { shift: "06–08", efficiency: 92, throughput: 4100, downtime: 2, utilization: 88 },
        { shift: "08–10", efficiency: 89, throughput: 3950, downtime: 5, utilization: 85 },
        { shift: "10–12", efficiency: 94, throughput: 4300, downtime: 1, utilization: 91 },
        { shift: "12–14", efficiency: 90, throughput: 4100, downtime: 3, utilization: 87 },
      ],
      monthlyTrend: [
        { month: "Jan", output: 720000 },
        { month: "Feb", output: 695000 },
        { month: "Mar", output: 740000 },
        { month: "Apr", output: 760000 },
      ],
    },

    kpis: [
      { title: "Revenue", value: "₹ 3.2 Cr", color: "#ee7203" },
      { title: "Production", value: "1.18 M", color: "#683e82" },
      { title: "Efficiency", value: "91.4%", color: "#f3c200" },
    ],
  };
};



export const getRightPanelAnalytics = (lineId) => {
  const degraded = lineId?.includes("1");

  return {
    frequencyData: [
      { range: "0–20%", normal: 5, warning: 2, error: degraded ? 3 : 1 },
      { range: "20–40%", normal: 8, warning: 3, error: degraded ? 4 : 1 },
      { range: "40–60%", normal: 12, warning: 4, error: degraded ? 6 : 2 },
      { range: "60–80%", normal: 15, warning: 5, error: degraded ? 7 : 2 },
      { range: "80–100%", normal: 20, warning: 3, error: degraded ? 5 : 1 },
    ],

    monthlyTrend: [
      { month: "Jan", output: degraded ? 620000 : 720000 },
      { month: "Feb", output: degraded ? 590000 : 695000 },
      { month: "Mar", output: degraded ? 640000 : 740000 },
      { month: "Apr", output: degraded ? 660000 : 760000 },
    ],

    totals: {
      output: degraded ? 1180000 : 1425000,
      downtime: degraded ? 72 : 28,
      efficiency: degraded ? 86.4 : 93.1,
    },
  };
};


export const performanceMetrics = {
  plant1: {
    bottling: {
      line1: {
        summary: {
          status: "Active",
          efficiency: 93.8,
          utilization: 89.2,
          output: 28450,
          target: 31800,
          downtime: 12,
          uptime: 98.3,
        },

        frequencyData: [
          { range: "0–20%", normal: 5, warning: 2, error: 3 },
          { range: "20–40%", normal: 8, warning: 3, error: 4 },
          { range: "40–60%", normal: 12, warning: 4, error: 6 },
          { range: "60–80%", normal: 15, warning: 5, error: 7 },
          { range: "80–100%", normal: 20, warning: 3, error: 5 },
        ],

        analytics: {
          shiftMetrics: [
            { shift: "T1", efficiency: 85, throughput: 120, downtime: 3, utilization: 82 },
            { shift: "T2", efficiency: 88, throughput: 150, downtime: 2, utilization: 86 },
            { shift: "T3", efficiency: 81, throughput: 90, downtime: 5, utilization: 78 },
            { shift: "T4", efficiency: 90, throughput: 170, downtime: 1, utilization: 89 },
          ],
          monthlyTrend: [
            { month: "Jan", output: 720000 },
            { month: "Feb", output: 695000 },
            { month: "Mar", output: 740000 },
            { month: "Apr", output: 760000 },
          ],
        },

        totals: {
          output: 1180000,
          downtime: 72,
          efficiency: 86.4,
        },

        kpis: [
          { title: "Revenue", value: "₹ 3.2 Cr", color: "#ee7203" },
          { title: "Production", value: "1.18 M", color: "#683e82" },
          { title: "Efficiency", value: "91.4%", color: "#f3c200" },
        ],
      },
    },
  },
};

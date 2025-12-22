import { performanceMetrics } from "../data/userPerformanceMetrics";

const emptyMetrics = {
  summary: null,
  analytics: {
    shiftMetrics: [],
    monthlyTrend: [],
  },
  kpis: [],
};

export const getPerformanceMetrics = (
  plantId,
  machineTypeId,
  lineId
) => {
  if (!plantId || !machineTypeId || !lineId) {
    return emptyMetrics;
  }

  return (
    performanceMetrics?.[plantId]?.[machineTypeId]?.[lineId] ||
    emptyMetrics
  );
};

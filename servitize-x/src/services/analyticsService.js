import {
  kpiDonutData,
  trendData,
  frequencyDistributionData,
  downtimeCauseData,
  radarPerformanceData,
  forecastData,
  analyticsSummary,
} from "../data/analyticsMockData";


export function getAnalyticsData({
  plantId,
  machineTypeId,
  lineId,
}) {
  if (!plantId || !machineTypeId || !lineId) return null;

  const degraded = lineId.includes("1");

  return {
    kpis: kpiDonutData.map(kpi => ({
      ...kpi,
      value: degraded ? kpi.value - 5 : kpi.value,
    })),

    trend: trendData.map(item => ({
      ...item,
      efficiency: degraded ? item.efficiency - 4 : item.efficiency,
    })),

    distribution: frequencyDistributionData,

    downtime: downtimeCauseData,

    radar: radarPerformanceData,

    forecast: forecastData,

    summary: {
      ...analyticsSummary,
      avgEfficiency: degraded
        ? analyticsSummary.avgEfficiency - 4
        : analyticsSummary.avgEfficiency,
    },
  };
}

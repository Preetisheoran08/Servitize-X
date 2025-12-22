import FrequencyStatusLegend from "./FrequencyStatusLegend";
import PerformanceFrequencyChart from "./charts/PerformanceFrequencyChart";
import MonthlyOutputChart from "./charts/MonthlyOutputChart";
import OverallTotalsStrip from "./OverallTotalsStrip";

export default function RightAnalyticsPanel({ analytics, totals }) {
  if (!analytics || !totals) return null;

  return (
    <div className="pl-6 pr-4 space-y-6">

      <FrequencyStatusLegend />

      <PerformanceFrequencyChart data={analytics.frequencyData} />

      <MonthlyOutputChart data={analytics.monthlyTrend} />

      <OverallTotalsStrip totals={totals} />
    </div>
  );
}

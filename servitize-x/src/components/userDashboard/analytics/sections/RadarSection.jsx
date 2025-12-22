import AnalyticsCard from "../cards/AnalyticsCard";
import RadarPerformanceChart from "../charts/RadarPerformanceChart";

export default function RadarSection() {
  return (
    <AnalyticsCard title="Multi-Factor Performance">
      <RadarPerformanceChart />
    </AnalyticsCard>
  );
}

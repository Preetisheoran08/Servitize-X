import AnalyticsCard from "../cards/AnalyticsCard";
import MultiLineTrendChart from "../charts/MultiLineTrendChart";

export default function TrendSection({ data }) {
  return (
    <AnalyticsCard title="Performance Trends">
      <MultiLineTrendChart data={data} />
    </AnalyticsCard>
  );
}

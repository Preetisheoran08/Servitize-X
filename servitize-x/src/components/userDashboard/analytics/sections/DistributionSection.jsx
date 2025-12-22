import AnalyticsCard from "../cards/AnalyticsCard";
import DistributionBarChart from "../charts/DistributionBarChart";

export default function DistributionSection({ data }) {
  return (
    <AnalyticsCard title="Operational Distribution">
      <DistributionBarChart data={data} />
    </AnalyticsCard>
  );
}

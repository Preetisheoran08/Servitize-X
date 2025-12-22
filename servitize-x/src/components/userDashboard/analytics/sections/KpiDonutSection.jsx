import AnalyticsCard from "../cards/AnalyticsCard";
import KpiDonutChart from "../charts/KpiDonutChart";

export default function KpiDonutSection({ data }) {
  return (
    <AnalyticsCard title="Key Performance Ratios">
      <div className="grid grid-cols-3 gap-6">
        {data.map(kpi => (
          <KpiDonutChart key={kpi.label} {...kpi} />
        ))}
      </div>
    </AnalyticsCard>
  );
}

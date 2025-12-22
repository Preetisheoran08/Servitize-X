import AnalyticsCard from "../cards/AnalyticsCard";
import ProgressIndicator from "../charts/ProgressIndicator";

export default function ForecastSection() {
  const metrics = [
    { label: "Production Target", value: 82 },
    { label: "Efficiency Goal", value: 91 },
    { label: "Utilization Plan", value: 87 },
  ];

  return (
    <AnalyticsCard title="Forecast & Targets">
      <div className="space-y-4">
        {metrics.map(m => (
          <ProgressIndicator key={m.label} {...m} />
        ))}
      </div>
    </AnalyticsCard>
  );
}

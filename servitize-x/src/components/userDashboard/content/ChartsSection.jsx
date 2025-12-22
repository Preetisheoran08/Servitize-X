import MultiSeriesChart from "./charts/MultiSeriesChart";
import KPIWidgets from "./KPIWidgets";

export default function ChartsSection({ analytics, kpis }) {
  if (!analytics) return null;

  return (
    <div className="space-y-10">
      
      <div>
        <h3 className="text-sm font-semibold mb-3 text-[#27348B]">
          Shift-wise Performance & Utilization
        </h3>
        <MultiSeriesChart data={analytics.shiftMetrics} />
      </div>

      <KPIWidgets kpis={kpis} />
    </div>
  );
}

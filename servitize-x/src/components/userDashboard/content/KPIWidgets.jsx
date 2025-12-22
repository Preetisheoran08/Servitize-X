import KPIWidgetCard from "./KPIWidgetCard";

export default function KPIWidgets({ kpis }) {
  if (!kpis || !kpis.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-6 mt-8">
      {kpis.map((kpi) => (
        <KPIWidgetCard
          key={kpi.title}
          title={kpi.title}
          value={kpi.value}
          color={kpi.color}
        />
      ))}
    </div>
  );
}

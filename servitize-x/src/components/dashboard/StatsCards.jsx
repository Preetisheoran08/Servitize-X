import StatsCard from "./StatsCard";

export default function StatsCards({ data }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {data.map((item, index) => (
        <StatsCard key={index} {...item} />
      ))}
    </div>
  );
}

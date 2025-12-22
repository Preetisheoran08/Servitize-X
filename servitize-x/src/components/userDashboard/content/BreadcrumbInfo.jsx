export default function BreadcrumbInfo({
  company = "Sonepar",
  plantName,
  machineTypeName,
  lineName,
}) {
  return (
    <div className="mb-6">
      <p className="text-xs text-gray-400 tracking-wide">
        {company}
        {plantName && ` / ${plantName}`}
        {machineTypeName && ` / ${machineTypeName}`}
      </p>

      <h1 className="text-2xl font-semibold mt-1 text-[#27348B]">
        {lineName || "—"}
      </h1>
    </div>
  );
}

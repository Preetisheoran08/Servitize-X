export default function MachineTypeSelector({
  machineTypes = [],
  selected,
  onSelect,
}) {
  if (!machineTypes.length) {
    return (
      <div className="mb-4 text-xs text-white/70">
        No machine types available
      </div>
    );
  }

  return (
    <div className="mb-6">
      <label className="text-xs font-medium mb-2 block uppercase tracking-wide">
        Machine Type
      </label>

      <div className="bg-white rounded-md text-black overflow-hidden">
        {machineTypes.map((type) => {
          const isActive = selected === type.id;

          return (
            <div
              key={type.id}
              onClick={() => onSelect(type.id)}
              className={`px-3 py-2 cursor-pointer transition-colors text-sm
                ${isActive ? "bg-[#16B5E8] text-white" : "hover:bg-gray-100"}
              `}
            >
              {type.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

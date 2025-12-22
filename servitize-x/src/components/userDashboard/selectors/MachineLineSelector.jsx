import MachineHealthIcon from "../indicators/MachineHealthIcon";

export default function MachineLineSelector({
  lines = [],
  selected,
  onSelect,
}) {
  if (!lines.length) {
    return (
      <div className="text-xs text-white/70">
        No machines available
      </div>
    );
  }

  return (
    <div className="mb-6">
      <label className="text-xs font-medium mb-2 block uppercase tracking-wide">
        Machine List
      </label>

      <div className="bg-white rounded-md text-black overflow-hidden">
        {lines.map((line) => {
          const isActive = selected === line.id;

          return (
            <div
              key={line.id}
              onClick={() => onSelect(line.id)}
              className={`flex items-center justify-between px-3 py-2 cursor-pointer transition-colors text-sm
                ${isActive ? "bg-[#16B5E8] text-white" : "hover:bg-gray-100"}
              `}
            >
              <span>{line.name}</span>
              <MachineHealthIcon health={line.health} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

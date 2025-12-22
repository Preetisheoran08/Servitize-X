import ConnectionStatusIcon from "../indicators/ConnectionStatusIcon";

export default function PlantSelector({
  plants = [],
  selected,
  onSelect,
}) {
  if (!plants.length) {
    return (
      <div className="mb-4 text-xs text-white/70">
        No plants available
      </div>
    );
  }

  return (
    <div className="mb-6">
      <label className="text-xs font-semibold mb-2 block uppercase">
        Plant / Site
      </label>

      <div className="bg-white rounded-md overflow-hidden text-black">
        {plants.map((plant) => (
          <div
            key={plant.id}
            onClick={() => onSelect(plant.id)}
            className={`flex items-center justify-between px-3 py-2 cursor-pointer transition
              ${
                selected === plant.id
                  ? "bg-[#16B5E8] text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            <span>{plant.name}</span>

            <ConnectionStatusIcon status={plant.connectionStatus} />
          </div>
        ))}
      </div>
    </div>
  );
}

import PlantSelector from "./selectors/PlantSelector";
import MachineTypeSelector from "./selectors/MachineTypeSelector";
import MachineLineSelector from "./selectors/MachineLineSelector";

export default function SideControlPanel({
  plants = [],
  selectedPlant,
  onPlantChange,
  machineTypes = [],
  selectedMachineType,
  onMachineTypeChange,
  machineLines = [],
  selectedLine,
  onLineChange,
}) {
  return (
    <aside className="w-64 h-full flex-shrink-0 bg-[#009ee3] text-white px-4 py-6 overflow-y-auto">
      <h3 className="text-sm font-semibold tracking-wide mb-6 uppercase">
        Operational Units
      </h3>

      <div className="space-y-6">
        <PlantSelector
          plants={plants}
          selected={selectedPlant}
          onSelect={onPlantChange}
        />

        <MachineTypeSelector
          machineTypes={machineTypes}
          selected={selectedMachineType}
          onSelect={onMachineTypeChange}
        />

        <MachineLineSelector
          lines={machineLines}
          selected={selectedLine}
          onSelect={onLineChange}
        />
      </div>
    </aside>
  );
}

import { plantsData } from "../data/plantsData";

export function getPlants() {
  return plantsData.map(({ machineTypes, ...plant }) => plant);
}

export function getMachineTypes(plantId) {
  const plant = plantsData.find(p => p.id === plantId);
  return plant?.machineTypes || [];
}

export function getMachineLines(plantId, machineTypeId) {
  const plant = plantsData.find(p => p.id === plantId);
  const type = plant?.machineTypes.find(t => t.id === machineTypeId);
  return type?.machines || [];
}

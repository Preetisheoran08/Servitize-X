export const plantsData = [
  {
    id: "plant1",
    name: "Plant / Site 1",
    connectionStatus: "weak",
    machineTypes: [
      {
        id: "bottling",
        name: "Bottling Lines",
        machines: [
          { id: "line1", name: "Line 1", health: "error" },
          { id: "line2", name: "Line 2", health: "good" },
          { id: "line3", name: "Line 3", health: "good" },
          { id: "line4", name: "Line 4", health: "warning" },
        ],
      },
      {
        id: "mixing",
        name: "Mixing Tanks",
        machines: [
          { id: "tank1", name: "Tank 1", health: "good" },
          { id: "tank2", name: "Tank 2", health: "warning" },
        ],
      },
    ],
  },
  {
    id: "plant2",
    name: "Plant / Site 2",
    connectionStatus: "good",
    machineTypes: [
      {
        id: "bottling",
        name: "Bottling Lines",
        machines: [
          { id: "line5", name: "Line 5", health: "good" },
          { id: "line6", name: "Line 6", health: "good" },
        ],
      },
    ],
  },
];

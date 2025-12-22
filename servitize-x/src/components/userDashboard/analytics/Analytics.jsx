import { useEffect, useState } from "react";
import UserDashboardLayout from "../../../layouts/UserDashboardLayout";

import AnalyticsHeader from "./sections/AnalyticsHeader";
import KpiDonutSection from "./sections/KpiDonutSection";
import TrendSection from "./sections/TrendSection";
import DistributionSection from "./sections/DistributionSection";
import RadarSection from "./sections/RadarSection";
import ForecastSection from "./sections/ForecastSection";


import {
  getPlants,
  getMachineTypes,
  getMachineLines,
} from "../../../services/userDashboardService";

import { getAnalyticsData } from "../../../services/analyticsService";

export default function Analytics() {
  /* ---------- FILTER STATE ---------- */
  const plants = getPlants();

  const [selectedPlant, setSelectedPlant] = useState(plants[0]?.id);
  const [machineTypes, setMachineTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [machineLines, setMachineLines] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);

  /* ---------- CASCADING FILTER LOGIC ---------- */
  useEffect(() => {
    if (!selectedPlant) return;
    const types = getMachineTypes(selectedPlant);
    setMachineTypes(types);
    setSelectedType(types[0]?.id || null);
  }, [selectedPlant]);

  useEffect(() => {
    if (!selectedPlant || !selectedType) return;
    const lines = getMachineLines(selectedPlant, selectedType);
    setMachineLines(lines);
    setSelectedLine(lines[0]?.id || null);
  }, [selectedPlant, selectedType]);

  /* ---------- ANALYTICS DATA ---------- */
  const analytics = getAnalyticsData({
    plantId: selectedPlant,
    machineTypeId: selectedType,
    lineId: selectedLine,
  });

  if (!analytics) return null;

  return (
    <UserDashboardLayout>
      <div className="space-y-10 px-6 py-4">

        {/* HEADER */}
        <AnalyticsHeader
          plant={selectedPlant}
          machineType={selectedType}
          line={selectedLine}
        />

        <KpiDonutSection data={analytics.kpis} />

        <TrendSection data={analytics.trend} />

        <DistributionSection data={analytics.distribution} />

        <RadarSection data={analytics.radar} />

        <ForecastSection data={analytics.forecast} />

      </div>
    </UserDashboardLayout>
  );
}

import { useState, useEffect } from "react";
import UserDashboardLayout from "../../layouts/UserDashboardLayout";

import SideControlPanel from "../../components/userDashboard/SideControlPanel";
import BreadcrumbInfo from "../../components/userDashboard/content/BreadcrumbInfo";
import PerformanceSummary from "../../components/userDashboard/content/PerformanceSummary";
import ChartsSection from "../../components/userDashboard/content/ChartsSection";
import RightAnalyticsPanel from "../../components/userDashboard/right/RightAnalyticsPanel";

import {
  getPlants,
  getMachineTypes,
  getMachineLines,
} from "../../services/userDashboardService";

import {
  getAnalyticsForLine,
  getRightPanelAnalytics,
} from "../../services/userAnalyticsService";

export default function Performance() {
  
  const plants = getPlants();

  
  const [selectedPlant, setSelectedPlant] = useState(plants[0]?.id || null);
  const [machineTypes, setMachineTypes] = useState([]);
  const [selectedMachineType, setSelectedMachineType] = useState(null);
  const [machineLines, setMachineLines] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);

  
  useEffect(() => {
    if (!selectedPlant) return;
    const types = getMachineTypes(selectedPlant);
    setMachineTypes(types);
    setSelectedMachineType(types[0]?.id || null);
  }, [selectedPlant]);

  useEffect(() => {
    if (!selectedPlant || !selectedMachineType) return;
    const lines = getMachineLines(selectedPlant, selectedMachineType);
    setMachineLines(lines);
    setSelectedLine(lines[0]?.id || null);
  }, [selectedPlant, selectedMachineType]);

  
  const analyticsData = selectedLine
    ? getAnalyticsForLine(selectedLine)
    : null;

  const rightPanelData = selectedLine
    ? getRightPanelAnalytics(selectedLine)
    : null;

    
  const selectedPlantObj = plants.find(p => p.id === selectedPlant);
  const selectedTypeObj = machineTypes.find(t => t.id === selectedMachineType);
  const selectedLineObj = machineLines.find(l => l.id === selectedLine);

  
  return (
    <UserDashboardLayout>
      <div className="flex w-full min-h-screen">


        <SideControlPanel
          plants={plants}
          selectedPlant={selectedPlant}
          onPlantChange={setSelectedPlant}
          machineTypes={machineTypes}
          selectedMachineType={selectedMachineType}
          onMachineTypeChange={setSelectedMachineType}
          machineLines={machineLines}
          selectedLine={selectedLine}
          onLineChange={setSelectedLine}
        />

      
        <section className="flex-1 px-8 py-6">
          <BreadcrumbInfo
            plant={selectedPlantObj?.name}
            machineType={selectedTypeObj?.name}
            line={selectedLineObj?.name}
          />

          {analyticsData && (
            <>
              <PerformanceSummary summary={analyticsData.summary} />
              <ChartsSection
                analytics={analyticsData.analytics}
                kpis={analyticsData.kpis}
              />
            </>
          )}
        </section> 

        
        <section className="w-[38%] min-w-[420px] border-l bg-gray-50 px-6 py-6">
          {rightPanelData && (
            <RightAnalyticsPanel
              analytics={rightPanelData}
              totals={rightPanelData.totals}
            />
          )}
        </section>

      </div>
    </UserDashboardLayout>
  );
}

import DashboardLayout from "../../layouts/DashboardLayout";
import StatisticsHeader from "../../components/dashboard/StatisticsHeader";
import StatsCards from "../../components/dashboard/StatsCards";
import CustomerStatusPie from "../../components/dashboard/CustomerStatusPie";
import RequestsLineChart from "../../components/dashboard/RequestsLineChart";
import PaymentsBarChart from "../../components/dashboard/PaymentsBarChart";

import {
  statsSummary,
  customerStatusData,
  requestsTrend,
  paymentsData,
} from "../../data/statistics";

export default function Statistics() {
  return (
    <DashboardLayout>
      <StatisticsHeader />

      <StatsCards data={statsSummary} />

      <div className="grid grid-cols-3 gap-6">
        <CustomerStatusPie data={customerStatusData} />
        <RequestsLineChart data={requestsTrend} />
        <PaymentsBarChart data={paymentsData} />
      </div>
    </DashboardLayout>
  );
}

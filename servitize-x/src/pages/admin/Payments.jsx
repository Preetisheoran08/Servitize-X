import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import PaymentsHeader from "../../components/dashboard/PaymentsHeader";
import PaymentFilters from "../../components/dashboard/PaymentFilters";
import PaymentsTable from "../../components/dashboard/PaymentsTable";
import { getPayments } from "../../services/paymentService";

const ITEMS_PER_PAGE = 5;

export default function Payments() {
  const allPayments = getPayments();

  const [searchText, setSearchText] = useState("");
  const [sortStatus, setSortStatus] = useState("ALL");
  const [sortDate, setSortDate] = useState("DESC");
  const [currentPage, setCurrentPage] = useState(1);

  let filtered = allPayments.filter((p) =>
    p.customerName.toLowerCase().includes(searchText.toLowerCase())
  );

  if (sortStatus !== "ALL") {
    filtered = filtered.filter((p) => p.status === sortStatus);
  }

  filtered.sort((a, b) =>
    sortDate === "ASC"
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <DashboardLayout>
      <PaymentsHeader searchText={searchText} onSearch={setSearchText} />

      <PaymentFilters
        sortStatus={sortStatus}
        sortDate={sortDate}
        onSortStatus={setSortStatus}
        onSortDate={setSortDate}
      />

      <PaymentsTable
        payments={paginated}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </DashboardLayout>
  );
}

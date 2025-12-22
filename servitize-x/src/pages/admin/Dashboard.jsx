import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsBar from "../../components/dashboard/StatsBar";
import CustomerFilters from "../../components/dashboard/CustomerFilters";
import CustomerTable from "../../components/dashboard/CustomerTable";
import { getCustomers } from "../../services/customerService";

const ITEMS_PER_PAGE = 5;

export default function Dashboard() {
  const allCustomers = getCustomers();

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState({
    from: "",
    to: "",
  });

  const filteredCustomers = allCustomers.filter((customer) => {
    const matchesSearch =
      customer.companyName.toLowerCase().includes(searchText.toLowerCase()) ||
      customer.adminName.toLowerCase().includes(searchText.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" || customer.status === statusFilter;

    const customerDate = new Date(customer.createdAt);
    const fromDate = dateRange.from ? new Date(dateRange.from) : null;
    const toDate = dateRange.to ? new Date(dateRange.to) : null;

    const matchesDate =
      (!fromDate || customerDate >= fromDate) &&
      (!toDate || customerDate <= toDate);

    return matchesSearch && matchesStatus && matchesDate;
  });

  const totalPages = Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  
  const handleSearch = (val) => {
    setSearchText(val);
    setCurrentPage(1);
  };

  const handleStatus = (val) => {
    setStatusFilter(val);
    setCurrentPage(1);
  };

  const handleDate = (range) => {
    setDateRange(range);
    setCurrentPage(1);
  };

  return (
    <DashboardLayout>
      <DashboardHeader />

      <StatsBar customers={filteredCustomers} />

      <CustomerFilters
        searchText={searchText}
        onSearchChange={handleSearch}
        statusFilter={statusFilter}
        onStatusChange={handleStatus}
        dateRange={dateRange}
        onDateChange={handleDate}
      />

      <CustomerTable
        customers={paginatedCustomers}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </DashboardLayout>
  );
}

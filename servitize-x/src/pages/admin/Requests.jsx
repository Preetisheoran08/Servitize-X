import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import RequestsHeader from "../../components/dashboard/RequestsHeader";
import RequestFilters from "../../components/dashboard/RequestFilters";
import RequestsTable from "../../components/dashboard/RequestsTable";
import RequestDetailsPanel from "../../components/dashboard/RequestDetailsPanel";
import {
  getRequests,
  updateRequestStatus,
} from "../../services/requestService";

export default function Requests() {
  const allRequests = getRequests();

  const [searchText, setSearchText] = useState("");
  const [sortStatus, setSortStatus] = useState("ALL");
  const [sortDate, setSortDate] = useState("DESC");
  const [selectedRequest, setSelectedRequest] = useState(null);

  let filtered = allRequests.filter((r) =>
    r.customerName.toLowerCase().includes(searchText.toLowerCase())
  );

  if (sortStatus !== "ALL") {
    filtered = filtered.filter((r) => r.status === sortStatus);
  }

  filtered.sort((a, b) =>
    sortDate === "ASC"
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date)
  );

  const handleApprove = () => {
    updateRequestStatus(selectedRequest.id, "APPROVED");
    setSelectedRequest({ ...selectedRequest, status: "APPROVED" });
  };

  const handleReject = () => {
    updateRequestStatus(selectedRequest.id, "REJECTED");
    setSelectedRequest({ ...selectedRequest, status: "REJECTED" });
  };

  return (
    <DashboardLayout>
      <div className="flex gap-6">
        
        {/* LEFT SIDE */}
        <div className="flex-1">
          <RequestsHeader
            searchText={searchText}
            onSearch={setSearchText}
          />

          <RequestFilters
            sortStatus={sortStatus}
            sortDate={sortDate}
            onSortStatus={setSortStatus}
            onSortDate={setSortDate}
          />

          <RequestsTable
            requests={filtered}
            selectedId={selectedRequest?.id}
            onSelect={setSelectedRequest}
          />
        </div>

        {/* RIGHT SIDE */}
        <RequestDetailsPanel
          request={selectedRequest}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
    </DashboardLayout>
  );
}

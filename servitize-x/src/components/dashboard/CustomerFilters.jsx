export default function CustomerFilters({
  searchText,
  onSearchChange,
  statusFilter,
  onStatusChange,
  dateRange,
  onDateChange,
}) {
  return (
    <div className="bg-white rounded-md px-4 py-3 flex items-center gap-4 mb-6">
      
      {/* Search */}
      <input
        type="text"
        placeholder="Search by Name, ID..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        className="
          flex-1
          border border-gray-300
          rounded-md
          px-3 py-2
          text-sm
          focus:outline-none
          focus:border-[#16B5E8]
        "
      />

      {/* Status */}
      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="
          border border-gray-300
          rounded-md
          px-3 py-2
          text-sm
          focus:outline-none
          focus:border-[#16B5E8]
        "
      >
        <option value="ALL">All Status</option>
        <option value="ACTIVE">Active</option>
        <option value="PIPELINE">Pipeline</option>
        <option value="INACTIVE">Inactive</option>
      </select>

      {/* Date Range */}
      <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-sm">
        <input
          type="date"
          value={dateRange.from}
          onChange={(e) =>
            onDateChange({ ...dateRange, from: e.target.value })
          }
          className="focus:outline-none"
        />
        <span className="text-gray-400">–</span>
        <input
          type="date"
          value={dateRange.to}
          onChange={(e) =>
            onDateChange({ ...dateRange, to: e.target.value })
          }
          className="focus:outline-none"
        />
      </div>
    </div>
  );
}

export default function PaymentFilters({
  sortStatus,
  sortDate,
  onSortStatus,
  onSortDate,
}) {
  return (
    <div className="flex gap-4 mb-6">
      
      {/* Status */}
      <div className="relative">
        <select
          value={sortStatus}
          onChange={(e) => onSortStatus(e.target.value)}
          className="
            appearance-none
            bg-white
            text-sm
            px-4 py-2
            pr-8
            rounded-full
            cursor-pointer
            focus:outline-none
          "
        >
          <option value="ALL">Sort By Status</option>
          <option value="PAID">Paid</option>
          <option value="PENDING">Pending</option>
          <option value="FAILED">Failed</option>
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
          ▼
        </span>
      </div>

      {/* Date */}
      <div className="relative">
        <select
          value={sortDate}
          onChange={(e) => onSortDate(e.target.value)}
          className="
            appearance-none
            bg-white
            text-sm
            px-4 py-2
            pr-8
            rounded-full
            cursor-pointer
            focus:outline-none
          "
        >
          <option value="DESC">Sort By Date</option>
          <option value="ASC">Oldest First</option>
          <option value="DESC">Newest First</option>
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
          ▼
        </span>
      </div>
    </div>
  );
}

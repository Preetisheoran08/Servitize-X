import CustomerRow from "./CustomerRow";
import TablePagination from "./TablePagination";

export default function CustomerTable({
  customers,
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-[#16B5E8]">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-white">
              Company
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-white">
              Admin
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-white">
              ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-white">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center py-6 text-gray-500 text-sm"
              >
                No customers found
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <CustomerRow key={customer.id} customer={customer} />
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

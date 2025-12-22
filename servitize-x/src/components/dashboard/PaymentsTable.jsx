import PaymentRow from "./PaymentRow";
import TablePagination from "./TablePagination";

export default function PaymentsTable({
  payments,
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-[#16B5E8]">
          <tr>
            <th className="px-3 py-3 text-left text-xs text-white">Transaction</th>
            <th className="px-3 py-3 text-left text-xs text-white">Customer</th>
            <th className="px-3 py-3 text-left text-xs text-white">Amount</th>
            <th className="px-3 py-3 text-left text-xs text-white">Status</th>
            <th className="px-3 py-3 text-left text-xs text-white">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <PaymentRow key={p.id} payment={p} />
          ))}
        </tbody>
      </table>

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

import RequestRow from "./RequestRow";

export default function RequestsTable({
  requests,
  selectedId,
  onSelect,
}) {
  return (
    <table className="w-full text-white border-collapse">
      <thead>
        <tr className="border-b border-[#16B5E8]">
          <th className="text-left px-3 py-2 text-sm">Request</th>
          <th className="text-left px-3 py-2 text-sm">Customer</th>
          <th className="text-left px-3 py-2 text-sm">Status</th>
          <th className="text-left px-3 py-2 text-sm">Date</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((req) => (
          <RequestRow
            key={req.id}
            request={req}
            isSelected={req.id === selectedId}
            onSelect={() => onSelect(req)}
          />
        ))}
      </tbody>
    </table>
  );
}

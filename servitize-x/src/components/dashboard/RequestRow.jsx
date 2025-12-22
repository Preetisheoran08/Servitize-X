import RequestStatusBadge from "./RequestStatusBadge";

export default function RequestRow({
  request,
  isSelected,
  onSelect,
}) {
  return (
    <tr
      onClick={onSelect}
      className={`
        cursor-pointer
        ${isSelected ? "bg-[#16B5E8] text-white" : ""}
      `}
    >
      <td className="px-3 py-2 text-sm">
        {request.id}
      </td>
      <td className="px-3 py-2 text-sm">
        {request.customerName}
      </td>
      <td className="px-3 py-2">
        <RequestStatusBadge status={request.status} />
      </td>
      <td className="px-3 py-2 text-sm">
        {new Date(request.date).toLocaleDateString()}
      </td>
    </tr>
  );
}

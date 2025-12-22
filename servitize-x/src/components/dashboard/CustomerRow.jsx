import StatusBadge from "./StatusBadge";

export default function CustomerRow({ customer }) {
  return (
    <tr className="border-b last:border-b-0">
      <td className="px-4 py-3 text-sm text-gray-800">
        {customer.companyName}
      </td>
      <td className="px-4 py-3 text-sm text-gray-800">
        {customer.adminName}
      </td>
      <td className="px-4 py-3 text-sm text-gray-500">
        {customer.id}
      </td>
      <td className="px-4 py-3">
        <StatusBadge status={customer.status} />
      </td>
    </tr>
  );
}

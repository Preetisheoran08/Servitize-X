import PaymentStatusBadge from "./PaymentStatusBadge";

export default function PaymentRow({ payment }) {
  return (
    <tr className="border-b border-[#16B5E8]/30">
      <td className="px-3 py-2 text-sm">{payment.id}</td>
      <td className="px-3 py-2 text-sm">{payment.customerName}</td>
      <td className="px-3 py-2 text-sm">₹{payment.amount}</td>
      <td className="px-3 py-2">
        <PaymentStatusBadge status={payment.status} />
      </td>
      <td className="px-3 py-2 text-sm">
        {new Date(payment.date).toLocaleDateString()}
      </td>
    </tr>
  );
}

export default function RequestActions({ onApprove, onReject }) {
  return (
    <div className="flex justify-between gap-4 mt-6">
      <button
        onClick={onReject}
        className="
          flex-1
          bg-red-500
          text-white
          py-2
          rounded-md
          hover:bg-red-600
        "
      >
        Reject
      </button>

      <button
        onClick={onApprove}
        className="
          flex-1
          bg-green-500
          text-white
          py-2
          rounded-md
          hover:bg-green-600
        "
      >
        Approve
      </button>
    </div>
  );
}

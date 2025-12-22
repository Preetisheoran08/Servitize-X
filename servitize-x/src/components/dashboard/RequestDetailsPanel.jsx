import RequestActions from "./RequestActions";
import RequestStatusBadge from "./RequestStatusBadge";

export default function RequestDetailsPanel({
  request,
  onApprove,
  onReject,
}) {
  if (!request) {
    return (
      <div className="w-80 bg-white p-6 rounded-md text-sm text-gray-500">
        Select a request to view details
      </div>
    );
  }

  return (
    <div className="w-80 bg-white p-6 rounded-md">
      <h3 className="text-sm font-semibold mb-2">
        Request #{request.id}
      </h3>

      <div className="flex items-center justify-between mb-4">
        <RequestStatusBadge status={request.status} />
        <span className="text-xs text-gray-500">
          {new Date(request.date).toDateString()}
        </span>
      </div>

      {/* User Icon */}
      <div className="flex justify-center my-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl">
          👤
        </div>
      </div>

      {/* Description */}
      <div className="border rounded-md p-3 text-sm text-gray-700 min-h-[120px]">
        {request.description}
      </div>

      {/* Actions */}
      <RequestActions
        onApprove={onApprove}
        onReject={onReject}
      />
    </div>
  );
}

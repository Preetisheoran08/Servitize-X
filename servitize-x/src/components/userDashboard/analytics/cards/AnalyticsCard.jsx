export default function AnalyticsCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {title && (
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

export default function RoleCard({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-40 h-28 bg-sky-500 hover:bg-sky-600
        flex flex-col items-center justify-center
        rounded-lg shadow-lg transition transform hover:scale-105
      "
    >
      <div className="text-3xl mb-2">👤</div>
      <span className="text-white font-semibold">{title}</span>
    </button>
  );
}

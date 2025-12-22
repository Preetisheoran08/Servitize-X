export default function AuthToggle({ left, right, active, onLeft, onRight }) {
  return (
    <div className="flex bg-white rounded-full w-64 mb-6 shadow">
      <button
        onClick={onLeft}
        className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
          active === "left"
            ? "bg-sky-500 text-white"
            : "text-gray-600 hover:text-black"
        }`}
      >
        {left}
      </button>

      <button
        onClick={onRight}
        className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
          active === "right"
            ? "bg-sky-500 text-white"
            : "text-gray-600 hover:text-black"
        }`}
      >
        {right}
      </button>
    </div>
  );
}

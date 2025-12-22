export default function PaymentsHeader({ searchText, onSearch }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold text-[#16B5E8]">
        PAYMENTS
      </h1>

      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        className="
          bg-transparent
          border border-[#16B5E8]
          rounded-full
          px-4 py-1
          text-sm text-white
          placeholder-[#BFD4FF]
          focus:outline-none
        "
      />
    </div>
  );
}

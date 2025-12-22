export default function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t rounded-b-md">
      
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          px-3 py-1 text-sm border rounded
          disabled:opacity-50
          hover:bg-gray-100
        "
      >
        ← Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              px-3 py-1 text-sm rounded
              ${
                page === currentPage
                  ? "bg-[#16B5E8] text-white"
                  : "border hover:bg-gray-100"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          px-3 py-1 text-sm border rounded
          disabled:opacity-50
          hover:bg-gray-100
        "
      >
        Next →
      </button>
    </div>
  );
}

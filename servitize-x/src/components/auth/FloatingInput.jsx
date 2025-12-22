export default function FloatingInput({
  label,
  type = "text",
  icon
}) {
  return (
    <div className="relative mb-4">
      {/* Icon */}
      {icon && (
        <span className="absolute right-3 top-3 text-gray-600">
          {icon}
        </span>
      )}

      {/* Input */}
      <input
        type={type}
        required
        className="
          peer
          w-full
          border
          border-gray-300
          rounded-md
          bg-white
          px-3
          pt-5
          pb-2
          text-sm
          text-gray-800
          focus:outline-none
          focus:border-sky-500
        "
      />

      {/* Floating Label */}
      <label
        className="
          absolute
          left-3
          top-2
          text-xs
          font-bold
          text-gray-800
          font-domine
          peer-focus:text-sky-600
        "
      >
        {label}
      </label>
    </div>
  );
}




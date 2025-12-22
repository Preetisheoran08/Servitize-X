export default function InputField({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full p-3 mb-3 rounded-md text-sm
        bg-white text-gray-700
        focus:outline-none focus:ring-2 focus:ring-sky-400
      "
    />
  );
}

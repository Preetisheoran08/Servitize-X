export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">

      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center relative">
        <h1 className="text-4xl font-bold text-blue-800 font-serif tracking-wide flex items-start gap-1">
  Servitize
  <span className="relative text-sky-500 font-bold">
    X
    <span className="absolute -top-2 -right-2 text-sm">
      ↗
    </span>
  </span>
</h1>


        <p className="absolute bottom-4 text-sm text-gray-600 font-serif">
          © Designed & Developed by Sonepar India Pvt. Ltd.
        </p>
      </div>

      <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-900 to-blue-900 flex items-center justify-center">
        {children}
      </div>

    </div>
  );
}

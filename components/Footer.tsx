export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold font-['Rubik'] text-gray-900">
            Brainwave.io
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-base font-semibold font-['Poppins'] text-gray-900">
            <a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-indigo-600 transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

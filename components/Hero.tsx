export default function Hero() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Hero Image */}
          <div className="mb-12 lg:mb-16">
            <img
              src="/Images/airpod-image.png"
              alt="AirPods"
              className="mx-auto w-64 lg:w-96 h-auto"
            />
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <p className="text-rose-600 text-xs font-bold font-['Poppins'] uppercase tracking-widest mb-6">
              Non-stop music for long time
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold font-['Poppins'] text-gray-900 leading-tight mb-8">
              Sound, that sounds better!
            </h1>

            <p className="text-lg text-gray-600 font-['Poppins'] mb-10 max-w-2xl mx-auto leading-relaxed">
              With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.
            </p>

            <button className="bg-indigo-600 text-white px-10 py-4 rounded-lg text-base font-bold font-['Poppins'] hover:bg-indigo-700 transition mb-6">
              Buy now - Starting at $99
            </button>

            <div className="text-gray-900 text-xs font-bold font-['Poppins'] uppercase tracking-wide">
              Watch in action
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

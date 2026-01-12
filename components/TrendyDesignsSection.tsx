export default function TrendyDesignsSection() {
  return (
    <section className="bg-gray-900 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/Images/Music Wave.png"
          alt="Music Wave Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-white leading-tight mb-6">
            Trendy designs with <br /> better sound quality.
          </h2>

          <p className="text-lg text-white/70 font-['Poppins'] max-w-2xl mx-auto leading-relaxed">
            We share common trends and strategies <br /> for improving your rental income.
          </p>
        </div>

        {/* AirPods Image */}
        <div className="flex justify-center">
          <img
            src="/Images/Air pods.png"
            alt="AirPods Pro"
            className="w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
}

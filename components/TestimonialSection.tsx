export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid md:grid-cols-3">
        {/* Left - Purple Background with Content (2/3) */}
        <div className="bg-indigo-600 py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-16 md:col-span-2 flex items-center justify-center">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-white leading-tight mb-6">
              Comfortable buds <br /> with better sound.
            </h2>

            <p className="text-lg text-white/80 font-['Poppins'] mb-12 leading-relaxed">
              We share common trends and strategies <br /> for improving your rental income.
            </p>

            {/* Testimonial Card */}
            <div className="rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <img
                  src="/Images/ProfilReview.png"
                  alt="Rhoda Brady"
                  className="w-14 h-14 rounded-full flex-shrink-0 object-cover"
                />
                <div>
                  <p className="text-xl text-white font-['Rubik'] mb-4 leading-relaxed">
                    "You made it so simple. My new site is so much faster and easier to work with than my old site."
                  </p>
                  <p className="text-base text-white/80 font-semibold font-['Poppins']">
                    Rhoda Brady
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Beige Background with Image (1/3) */}
        <div className="bg-amber-100 relative overflow-hidden md:col-span-1 min-h-[400px] md:min-h-[500px] max-h-[600px]">
          <img
            src="/Images/Enjoying Image.png"
            alt="Person with AirPods"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

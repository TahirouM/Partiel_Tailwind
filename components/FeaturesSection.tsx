import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/Images/Icône 1.svg',
      title: 'Comfortable Buds',
      description: 'With lots of unique blocks, you can easily build a page without coding.',
    },
    {
      icon: '/Images/Icône 2.svg',
      title: 'Powerful Bass',
      description: 'With lots of unique blocks, you can easily build a page without coding.',
    },
  ];

  return (
    <section className="bg-indigo-50">
      <div className="grid md:grid-cols-3">
        {/* Left - Image (1/3) */}
        <div className="order-2 md:order-1 md:col-span-1 h-full min-h-[400px] md:min-h-[500px] max-h-[600px] overflow-hidden">
          <img
            src="/Images/Running Image.png"
            alt="Person running with music"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Content (2/3) */}
        <div className="order-1 md:order-2 md:col-span-2 flex flex-col justify-center py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-gray-900 leading-tight mb-6">
            Listen music <br /> anytime, anywhere.
          </h2>

          <p className="text-lg text-gray-600 font-['Poppins'] mb-12 leading-relaxed">
            We share common trends and strategies <br /> for improving your rental income.
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8 lg:pr-32">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

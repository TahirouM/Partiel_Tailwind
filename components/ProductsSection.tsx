import ProductCard from './ProductCard';

export default function ProductsSection() {
  const products = [
    {
      image: '/Images/Airpods Green.png',
      title: 'Midnight Green',
      description: 'AirPods (2nd gen) iPhone Colors with Wireless Charging Case',
      price: '$99',
    },
    {
      image: '/Images/Airpods White.png',
      title: 'Silver',
      description: 'AirPods (2nd gen) iPhone Colors with Wireless Charging Case',
      price: '$99',
    },
    {
      image: '/Images/Airpods Pink.png',
      title: 'Gold',
      description: 'AirPods (2nd gen) iPhone Colors with Wireless Charging Case',
      price: '$99',
    },
  ];

  return (
    <section className="bg-color-[#313131] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-gray-900 leading-tight mb-6">
            Get your airpod now.
          </h2>

          <p className="text-lg text-gray-600 font-['Poppins'] max-w-2xl mx-auto leading-relaxed">
            We share common trends and strategies <br /> for improving your rental income.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export default function ProductCard({ image, title, description, price }: ProductCardProps) {
  return (
    <div className="p-8 text-center">
      <div className="mb-6 h-48 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-2xl font-bold font-['Poppins'] text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-base text-gray-600 font-['Poppins'] mb-6 leading-relaxed">
        {description}
      </p>
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-base font-bold font-['Poppins'] hover:bg-indigo-700 transition w-full">
        Buy now - {price}
      </button>
    </div>
  );
}

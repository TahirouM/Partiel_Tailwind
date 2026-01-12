interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
          <img src={icon} alt={title} className="w-full h-full" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-['Poppins'] text-gray-900 mb-3">
            {title}
          </h3>
          <p className="text-base text-gray-600 font-['Poppins'] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

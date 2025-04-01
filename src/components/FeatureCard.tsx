
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, color, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 font-georgian">{title}</h3>
      <p className="text-gray-600 font-georgian">{description}</p>
    </div>
  );
};

export default FeatureCard;

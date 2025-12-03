import React from 'react';
interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  titleSize?: 'sm' | 'md' | 'lg';
  className?: string;
  textColor?: string;
}
const SectionHeading = ({
  subtitle,
  title,
  description,
  alignment = 'center',
  titleSize = 'md',
  className = '',
  textColor = 'text-gray-900'
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  const titleClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl'
  };
  return <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]} ${className}`}>
      {subtitle && <p className="text-gray-500 font-medium mb-2 uppercase text-sm tracking-wider">
          {subtitle}
        </p>}
      <h2 className={`font-light ${textColor} mb-4 ${titleClasses[titleSize]}`}>
        {title}
      </h2>
      {description && <p className="text-gray-600 text-lg">{description}</p>}
    </div>;
};
export default SectionHeading;
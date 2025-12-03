import React from 'react';
interface StatItemProps {
  value: string;
  label: string;
}
const StatItem = ({
  value,
  label
}: StatItemProps) => <div className="text-center">
    <p className="text-4xl font-light text-black mb-2">{value}</p>
    <p className="text-gray-600">{label}</p>
  </div>;
interface StatsProps {
  items: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}
const Stats = ({
  items,
  className = ''
}: StatsProps) => {
  return <div className={`flex justify-center ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-3xl">
        {items.map((item, index) => <StatItem key={index} value={item.value} label={item.label} />)}
      </div>
    </div>;
};
export default Stats;
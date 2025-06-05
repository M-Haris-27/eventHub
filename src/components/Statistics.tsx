
import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  number: number;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { number: 500, label: "Events Listed", color: "from-blue-500 to-blue-600" },
  { number: 50000, label: "Happy Attendees", color: "from-purple-500 to-purple-600" },
  { number: 100, label: "Cities Covered", color: "from-green-500 to-green-600" }
];

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.number / 60;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${Math.floor(num / 1000)}k+`;
    }
    return `${num}+`;
  };

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 text-center border-2 border-gray-200/50 dark:border-gray-700/40 hover:scale-105 transition-transform"
            >
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                {formatNumber(counts[index])}
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

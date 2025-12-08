import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 30, suffix: '+', label: "Années d'expérience" },
  { value: 500, suffix: '+', label: 'Clients satisfaits' },
  { value: 100000, suffix: '+', label: 'Produits livrés' },
  { value: 24, suffix: 'h', label: 'Livraison offerte' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString('fr-FR');
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold tracking-tight">
      {isInView ? (
        <>
          {value === 24 ? '< ' : ''}
          {formatNumber(count)}
          <span className="text-accent">{suffix}</span>
        </>
      ) : (
        '0'
      )}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

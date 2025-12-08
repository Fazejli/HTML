import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Entreprise familiale depuis 1992',
  'Plus de 100 000 références produits',
  'Livraison rapide sur tout le Maroc',
  'Service personnalisé et conseil expert',
];

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
          >
            Notre Histoire
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            Une expertise transmise de génération en génération
          </h2>
          
          <div className="space-y-4 text-muted-foreground text-lg mb-8">
            <p>
              Fondée en 1992 à Casablanca, VTI est une entreprise familiale spécialisée 
              dans la vente de machines et fournitures textiles.
            </p>
            <p>
              Depuis plus de 30 ans, nous accompagnons les professionnels du textile 
              avec du matériel de qualité : aiguilles industrielles, courroies, 
              pièces détachées et bien plus encore.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import productNeedles from '@/assets/product-needles.jpg';
import productBelts from '@/assets/product-belts.jpg';
import productMachine from '@/assets/product-machine.jpg';
import productParts from '@/assets/product-parts.jpg';

const products = [
  {
    id: 1,
    title: 'Aiguilles Industrielles',
    description: 'Aiguilles haute résistance pour machines.',
    ref: '+10.000 références',
    price: 'Sur devis',
    inStock: true,
    image: productNeedles,
  },
  {
    id: 2,
    title: 'Courroies',
    description: 'Courroies renforcées pour toutes machines textiles.',
    ref: '+1000 références',
    price: 'À partir de 250 MAD',
    inStock: true,
    image: productBelts,
  },
  {
    id: 3,
    title: 'Machines de textile',
    description: 'Machine de haute qualité.',
    ref: 'Référence sur demande',
    price: 'Sur devis',
    inStock: false,
    image: productMachine,
  },
  {
    id: 4,
    title: 'Pièces Détachées',
    description: 'Large gamme de pièces pour machines industrielles.',
    ref: 'Référence sur demande',
    price: 'Sur devis',
    inStock: true,
    stockLabel: 'Selon stock',
    image: productParts,
  },
];

interface ProductsSectionProps {
  fullPage?: boolean;
}

export function ProductsSection({ fullPage = false }: ProductsSectionProps) {
  return (
    <section className={cn("py-20", fullPage && "pt-32")}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Notre Catalogue
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez notre sélection de produits pour l'industrie textile
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-hover hover:border-primary/20"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-1">{product.ref}</p>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{product.price}</span>
                  <Badge
                    variant={product.inStock ? 'default' : 'destructive'}
                    className={cn(
                      "font-medium",
                      product.inStock 
                        ? "bg-green-100 text-green-800 hover:bg-green-100" 
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                    )}
                  >
                    {product.stockLabel || (product.inStock ? 'En stock' : 'Rupture')}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

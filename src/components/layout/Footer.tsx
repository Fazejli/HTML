import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">V.T.I. SARL</h4>
            <p className="text-muted-foreground mb-2">
              Fournitures et Machines Textiles
            </p>
            <p className="text-muted-foreground">
              Entreprise familiale depuis 1992.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=Casablanca,Maroc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin size={18} className="text-accent" />
                Casablanca, Maroc
              </a>
              <a 
                href="tel:+212661217108" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={18} className="text-accent" />
                +212 6 61 21 71 08
              </a>
              <a 
                href="mailto:vti.zejli@hotmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} className="text-accent" />
                vti.zejli@hotmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Horaires</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5" />
                <div>
                  <p>Lundi - Vendredi : 8h/12h30 - 14h/18h</p>
                  <p>Samedi : 8h/13h</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} VTI - Tous droits réservés
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

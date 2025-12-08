import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'catalogue', label: 'Catalogue' },
  { id: 'reservation', label: 'Réservation' },
  { id: 'contact', label: 'Contact' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'glass border-b border-border/50'
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => handleNavigate('accueil')}
              className="text-2xl font-bold tracking-tight text-foreground"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              VTI
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors relative',
                    currentPage === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-muted rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-20 md:hidden"
          >
            <nav className="flex flex-col items-center gap-4 p-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigate(item.id)}
                  className={cn(
                    'text-xl font-medium py-3 px-6 rounded-lg transition-colors w-full text-center',
                    currentPage === item.id
                      ? 'bg-muted text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

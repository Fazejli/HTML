import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { ReservationSection } from '@/components/sections/ReservationSection';
import { ContactSection } from '@/components/sections/ContactSection';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Index = () => {
  const [currentPage, setCurrentPage] = useState('accueil');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'accueil' && (
          <motion.main
            key="accueil"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <HeroSection onNavigate={handleNavigate} />
            <StatsSection />
            <AboutSection />
          </motion.main>
        )}

        {currentPage === 'catalogue' && (
          <motion.main
            key="catalogue"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ProductsSection fullPage />
          </motion.main>
        )}

        {currentPage === 'reservation' && (
          <motion.main
            key="reservation"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ReservationSection />
          </motion.main>
        )}

        {currentPage === 'contact' && (
          <motion.main
            key="contact"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ContactSection />
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Index;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout & UI
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/ui/BackToTop';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

// Styles
import './styles/globals.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background">
      <CustomCursor />
      <ScrollProgressBar />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <MeshBackground />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <div className="section-divider" />
              <About />
              <div className="section-divider" />
              <Skills />
              <div className="section-divider" />
              <Projects />
              <div className="section-divider" />
              <Experience />
              <div className="section-divider" />
              <Achievements />
              <div className="section-divider" />
              <Certifications />
              <div className="section-divider" />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
            <div className="grain-overlay" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MeshBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 80, -40, 0],
        y: [0, -60, 80, 0],
        scale: [1, 1.15, 0.85, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-15%] left-[-10%] w-[550px] h-[550px] bg-primary/[0.06] rounded-full blur-[140px]"
    />
    <motion.div
      animate={{
        x: [0, -80, 40, 0],
        y: [0, 80, -40, 0],
        scale: [1, 0.85, 1.15, 1],
      }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-15%] right-[-10%] w-[650px] h-[650px] bg-secondary/[0.06] rounded-full blur-[160px]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

const LoadingScreen = () => (
  <motion.div
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
  >
    <div className="relative">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        className="w-20 h-20 border border-dashed border-primary/15 rounded-full"
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 border border-secondary/10 rounded-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg font-heading font-black tracking-tight"
        >
          <span className="gradient-text">MC</span>
          <span className="text-primary">.</span>
        </motion.span>
      </div>
    </div>

    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 160 }}
      transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mt-10"
    />
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.6, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent/25 mt-4"
    >
      Loading
    </motion.p>
  </motion.div>
);

export default App;

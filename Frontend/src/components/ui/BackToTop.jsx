import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent/40 hover:text-primary hover:border-primary/20 hover:shadow-glow-cyan transition-all backdrop-blur-sm"
                    aria-label="Back to top"
                >
                    <FaArrowUp size={12} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;

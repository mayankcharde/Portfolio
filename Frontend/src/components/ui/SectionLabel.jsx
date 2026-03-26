import { motion } from 'framer-motion';

const SectionLabel = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
        >
            <div className="relative flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shadow-glow-cyan animate-pulse" />
                <span className="w-8 h-[1px] bg-gradient-to-r from-primary to-transparent" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/80">
                {children}
            </span>
            <span className="w-12 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
        </motion.div>
    );
};

export default SectionLabel;

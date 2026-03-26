import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import CertificateCard from '../ui/CertificateCard';
import { portfolioData } from '../../data/portfolioData';
import { FaAward } from 'react-icons/fa';

const Certifications = () => {
    const { certifications } = portfolioData;

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <SectionLabel>Credentials</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
                        Licenses & <span className="text-primary italic">Certifications</span>
                    </h2>
                    <p className="mt-4 text-white/30 text-sm max-w-lg mx-auto leading-relaxed">
                        Industry-recognized certifications from global leaders in AI, Cloud, and Software Engineering.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {certifications.map((cert, i) => (
                        <CertificateCard key={i} cert={cert} index={i} />
                    ))}
                </div>

                {/* Bottom stat bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 flex items-center justify-center gap-3 text-white/25"
                >
                    <FaAward className="text-primary/50" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                        {certifications.length} Verified Certifications
                    </span>
                    <FaAward className="text-primary/50" />
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;

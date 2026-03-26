import { motion } from 'framer-motion';
import { FaCertificate, FaCalendarAlt, FaFingerprint } from 'react-icons/fa';

const CertificateCard = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden cursor-default"
        >
            {/* Issuer color accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
            />

            {/* Background glow */}
            <div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundColor: cert.color }}
            />

            <div className="relative z-10">
                {/* Icon + Issuer row */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm border border-white/[0.06] group-hover:border-white/[0.12] transition-all"
                            style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                        >
                            <FaCertificate />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 group-hover:text-white/50 transition-colors">
                            {cert.issuer}
                        </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/25 group-hover:text-white/40 transition-colors">
                        <FaCalendarAlt size={9} />
                        {cert.date}
                    </span>
                </div>

                {/* Title */}
                <h4 className="font-heading font-bold text-[15px] text-white/80 group-hover:text-white transition-colors leading-snug mb-3">
                    {cert.title}
                </h4>

                {/* Credential ID */}
                {cert.credentialId && (
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/20 group-hover:text-white/35 transition-colors truncate">
                        <FaFingerprint size={10} />
                        <span className="truncate">{cert.credentialId}</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default CertificateCard;

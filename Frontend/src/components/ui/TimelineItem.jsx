import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaGithub, FaAward, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const TimelineItem = ({ item, index }) => {
    const isLeft = index % 2 === 0;
    const Icon = item.type === 'work' ? FaBriefcase : FaGraduationCap;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'} items-start gap-8 md:gap-16`}
        >
            {/* Timeline Indicator */}
            <div className="absolute left-5 md:left-1/2 top-4 -translate-x-1/2 z-20">
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 + index * 0.1 }}
                    className="w-10 h-10 rounded-2xl bg-background border-2 border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,245,255,0.2)] ring-8 ring-background"
                >
                    <Icon size={16} />
                </motion.div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[calc(50%-50px)] ${isLeft ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors" />

                    <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} gap-1 mb-6`}>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                                <FaCalendarAlt size={10} />
                                {item.duration}
                            </span>
                        </div>
                        <h3 className="text-2xl font-heading font-black text-white group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary/80 font-bold text-sm tracking-wide">
                            <span>{item.company}</span>
                            <span className="text-white/20">|</span>
                            <span className="flex items-center gap-1.5 text-white/40 text-[11px] font-medium uppercase tracking-wider">
                                <FaMapMarkerAlt size={10} />
                                {item.location}
                            </span>
                        </div>
                    </div>

                    <ul className={`space-y-3 mb-8 ${isLeft ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {item.points.map((point, i) => (
                            <li key={i} className={`text-white/40 text-sm leading-relaxed flex items-start gap-3 ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 mb-6 ${isLeft ? 'md:justify-end' : ''}`}>
                        {item.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-lg bg-white/[0.03] text-white/40 border border-white/[0.05] group-hover:border-primary/10 group-hover:text-white/60 transition-all">
                                {t}
                            </span>
                        ))}
                    </div>

                    {item.repo && (
                        <div className={`flex ${isLeft ? 'md:justify-end' : ''}`}>
                            <motion.a 
                                href={item.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all text-sm font-bold"
                            >
                                <FaGithub />
                                <span>View Source</span>
                            </motion.a>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TimelineItem;

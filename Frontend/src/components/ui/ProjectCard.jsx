import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className={`group relative rounded-2xl overflow-hidden border border-white/[0.05] bg-white/[0.02] hover:border-white/[0.1] transition-all duration-500 ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
        >
            {/* Image Section */}
            <div className={`relative overflow-hidden ${project.featured ? 'h-[400px]' : 'h-[240px]'}`}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.4]"
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />

                {/* Status Badges */}
                <div className="absolute top-5 left-5 flex gap-2">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-accent/80">
                        {project.category}
                    </span>
                    {project.featured && (
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary">
                            ★ Featured
                        </span>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-7 relative z-10">
                <div className="mb-5">
                    <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-2 group-hover:text-white/60 transition-colors">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded bg-white/[0.03] text-accent/50 border border-white/[0.05] group-hover:border-white/10 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Interactive Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                    <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-3.5 px-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn"
                    >
                        <FaGithub size={16} className="group-hover/btn:rotate-12 transition-transform" />
                        <span>GitHub</span>
                    </motion.a>
                    
                    {project.demo && project.demo !== '#' && (
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 py-3.5 px-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center gap-2 text-sm font-bold text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,245,255,0.05)] hover:shadow-[0_0_25px_rgba(0,245,255,0.15)] group/btn-live"
                        >
                            <FaRocket size={14} className="group-hover/btn-live:translate-x-0.5 group-hover/btn-live:-translate-y-0.5 transition-transform" />
                            <span>Live Demo</span>
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    );
};

export default ProjectCard;

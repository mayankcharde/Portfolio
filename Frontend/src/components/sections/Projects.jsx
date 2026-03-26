import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import ProjectCard from '../ui/ProjectCard';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    
    // Derive dynamic categories
    const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 relative bg-background">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <SectionLabel>Featured Work</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold">
                            Digital <span className="text-secondary italic">Creations</span>
                        </h2>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === cat
                                        ? 'bg-secondary text-white shadow-[0_0_20px_#7B2FFF66]'
                                        : 'glass text-accent/40 hover:text-accent'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a
                        href={portfolioData.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 glass border-white/10 hover:border-primary/50 text-accent font-bold uppercase tracking-widest transition-all group"
                    >
                        View More on GitHub
                        <span className="text-primary group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

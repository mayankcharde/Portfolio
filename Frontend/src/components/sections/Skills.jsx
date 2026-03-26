import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SkillCard from '../ui/SkillCard';
import { portfolioData } from '../../data/portfolioData';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('mern');
    const { mern, ai, backend, tools, soft } = portfolioData.skills;

    const tabs = [
        { id: 'mern', label: 'MERN Stack' },
        { id: 'ai', label: 'AI & Machine Learning' },
        { id: 'backend', label: 'Backend & DB' },
        { id: 'tools', label: 'Tech & Tools' }
    ];

    const getSkills = () => {
        switch (activeTab) {
            case 'mern': return mern;
            case 'ai': return ai;
            case 'backend': return backend;
            case 'tools': return tools;
            default: return mern;
        }
    };

    return (
        <section id="skills" className="py-24 relative bg-background/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <SectionLabel>My Expertise</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                            Modern <span className="gradient-text italic">Skillset</span>
                        </h2>
                        <p className="text-muted mt-4 text-sm md:text-base">
                            Bridging the gap between intelligent algorithms and seamless user experiences.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 p-1.5 bg-white/[0.03] rounded-2xl border border-white/10 glass">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative overflow-hidden group ${
                                    activeTab === tab.id
                                        ? 'text-background'
                                        : 'text-accent/40 hover:text-accent/80'
                                }`}
                            >
                                <span className="relative z-10">{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTabBg"
                                        className="absolute inset-0 bg-primary shadow-glow-cyan"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-20 min-h-[400px]"
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {getSkills().map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Soft Skills */}
                <div className="pt-12 border-t border-white/[0.04]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <p className="text-accent/30 text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Strategy & Mindset</p>
                            <h3 className="text-xl font-heading font-bold">Complementary Strengths</h3>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-2xl">
                            {soft.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-5 py-2 rounded-lg bg-white/[0.02] border border-white/5 text-accent/50 text-[10px] font-bold uppercase tracking-widest hover:border-primary/20 hover:text-primary transition-all cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;


import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '../ui/SectionLabel';
import TimelineItem from '../ui/TimelineItem';
import { portfolioData } from '../../data/portfolioData';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('work');
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const items = portfolioData.experience.filter(e => e.type === activeTab);

    return (
        <section id="experience" className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
                    <div className="text-center md:text-left">
                        <SectionLabel>My Career Path</SectionLabel>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold">
                            Experience <span className="text-primary italic">&</span> Education
                        </h2>
                    </div>

                    <div className="flex p-1 bg-white/5 rounded-xl border border-white/10">
                        {['work', 'education'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                                        ? 'bg-primary text-background shadow-glow-cyan'
                                        : 'text-accent/40 hover:text-accent'
                                    }`}
                            >
                                {tab === 'work' ? 'Work Experience' : 'Education'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
                    <motion.div
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary origin-top -translate-x-1/2 shadow-glow-cyan"
                        style={{ scaleY }}
                    />

                    <div className="space-y-12">
                        {items.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

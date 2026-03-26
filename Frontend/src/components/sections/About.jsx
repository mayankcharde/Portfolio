import { motion } from 'framer-motion';
import { FaCoffee, FaGamepad, FaHeart, FaBook } from 'react-icons/fa';
import SectionLabel from '../ui/SectionLabel';
import AnimatedCounter from '../ui/AnimatedCounter';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
    const { stats, personalInfo } = portfolioData;

    const funFacts = [
        // { icon: <FaCoffee />, text: "Fueled by Coffee", color: "text-amber-400" },
        // { icon: <FaGamepad />, text: "Weekend Gamer", color: "text-blue-400" },
        // { icon: <FaHeart />, text: "Open Source Lover", color: "text-rose-400" },
        // { icon: <FaBook />, text: "Lifelong Learner", color: "text-emerald-400" },
    ];

    return (
        <section id="about" className="py-28 relative overflow-hidden">
            {/* Ambient */}
            <div className="absolute top-[50%] left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 md:px-12">
                <SectionLabel>About Me</SectionLabel>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        {/* Decorative Frame */}
                        <div className="absolute -inset-3 rounded-2xl border border-white/[0.04] group-hover:border-primary/10 transition-colors duration-700" />
                        <div className="absolute -inset-6 rounded-3xl border border-dashed border-white/[0.03]" />

                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                            <img
                                src="/mayank 2.jpeg"
                                alt="About Me"
                                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.05] group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        </div>

                        {/* Float Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-strong p-5 rounded-xl"
                        >
                            <span className="text-2xl font-heading font-black gradient-text">{stats.years}</span>
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent/40">Years of Code</p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 leading-[1.1]">
                            Crafting{' '}
                            <span className="gradient-text italic">Digital Excellence</span>
                            <br />Through Innovation
                        </h2>

                        <p className="text-muted text-base leading-relaxed mb-10">
                            {personalInfo.bio} I specialize in bridging the gap between design and development, ensuring every project I touch is both functionally robust and aesthetically superior.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {[
                                { label: "Projects Built", value: parseInt(stats.projects), suffix: "+" },
                                { label: "GitHub Commits", value: parseInt(stats.commits), suffix: "+" },
                                { label: "Pull Requests", value: parseInt(stats.prs), suffix: "+" },
                                { label: "Technologies", value: parseInt(stats.technologies), suffix: "+" },
                            ].map((stat, i) => (
                                <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors group/stat">
                                    <div className="text-2xl font-heading font-black text-accent mb-1 group-hover/stat:gradient-text transition-all">
                                        <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent/30">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a href={personalInfo.resume} className="px-7 py-3 bg-secondary/90 text-white font-bold text-xs uppercase tracking-[0.12em] rounded-xl hover:shadow-glow-violet transition-all">
                                Download Resume
                            </a>
                            <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="px-7 py-3 border border-white/10 text-accent/70 font-bold text-xs uppercase tracking-[0.12em] rounded-xl hover:bg-white/[0.03] hover:border-white/20 transition-all">
                                View GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Fun Facts */}
                <div className="flex flex-wrap justify-center gap-3">
                    {funFacts.map((fact, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -3, background: "rgba(255,255,255,0.04)" }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.04] cursor-default group transition-all"
                        >
                            <span className={`text-sm ${fact.color} group-hover:scale-110 transition-transform`}>{fact.icon}</span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent/50 group-hover:text-accent/70 transition-colors">{fact.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

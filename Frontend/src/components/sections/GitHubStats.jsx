import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory, FaExclamationCircle } from 'react-icons/fa';
import SectionLabel from '../ui/SectionLabel';
import AnimatedCounter from '../ui/AnimatedCounter';
import { portfolioData } from '../../data/portfolioData';

const GitHubStats = () => {
    const username = portfolioData.githubUsername;

    // Simulated heatmap data (52 weeks x 7 days)
    const heatmapData = Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 5));

    const stats = [
        { label: "Total Commits", value: 2500, icon: <FaHistory className="text-primary" /> },
        { label: "Public Repos", value: 45, icon: <FaStar className="text-secondary" /> },
        { label: "Pull Requests", value: 120, icon: <FaCodeBranch className="text-green-500" /> },
        { label: "Issues Opened", value: 60, icon: <FaExclamationCircle className="text-orange-500" /> },
    ];

    return (
        <section id="github" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <SectionLabel>Open Source</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
                        My <span className="text-primary italic">GitHub</span> Activity
                    </h2>
                </div>

                {/* GitHub Stats Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <GitHubCard
                        title="General Stats"
                        imgSrc={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D111700`}
                    />
                    <GitHubCard
                        title="Top Languages"
                        imgSrc={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D111700`}
                    />
                    <GitHubCard
                        title="Streak Stats"
                        imgSrc={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true&background=0D111700`}
                    />
                </div>

                {/* Contribution Heatmap simulation */}
                <div className="p-8 rounded-3xl glass border-white/5 mb-16">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-heading font-bold text-xl flex items-center gap-3">
                            <FaGithub size={24} /> 542 contributions in the last year
                        </h3>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-accent/40 uppercase tracking-widest">
                            Less <div className="flex gap-1">
                                {[0, 1, 2, 3, 4].map(v => (
                                    <div key={v} className="w-2.5 h-2.5 rounded-sm" style={{ opacity: v / 4 || 0.1, backgroundColor: 'var(--primary)' }} />
                                ))}
                            </div> More
                        </div>
                    </div>

                    <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-4 custom-scrollbar">
                        {heatmapData.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (i % 52) * 0.01, duration: 0.2 }}
                                viewport={{ once: true }}
                                className="w-3 h-3 md:w-4 md:h-4 rounded-[2px] cursor-pointer hover:ring-1 hover:ring-primary transition-all"
                                style={{
                                    backgroundColor: val === 0 ? 'rgba(255,255,255,0.03)' : 'var(--primary)',
                                    opacity: val === 0 ? 1 : val * 0.25
                                }}
                                title={`${val} contributions on ${new Date(Date.now() - (364 - Math.floor(i / 7)) * 24 * 60 * 60 * 1000).toDateString()}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="flex justify-center mb-3 group-hover:scale-125 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-heading font-black mb-1 text-accent">
                                <AnimatedCounter to={stat.value} suffix="+" />
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-accent/40">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-primary text-background font-black uppercase tracking-widest rounded-xl shadow-glow-cyan"
                    >
                        View Full GitHub Profile
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

const GitHubCard = ({ title, imgSrc }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-4 rounded-3xl glass border-white/5 flex flex-col items-center"
    >
        <h3 className="text-accent/60 text-xs font-bold uppercase tracking-widest mb-4 self-start pl-4">{title}</h3>
        <img src={imgSrc} alt={title} className="max-w-full" />
    </motion.div>
);

export default GitHubStats;

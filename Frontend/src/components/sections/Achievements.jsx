import SectionLabel from '../ui/SectionLabel';
import AchievementCard from '../ui/AchievementCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import { portfolioData } from '../../data/portfolioData';

const Achievements = () => {
    const { achievements, stats } = portfolioData;

    const statStrip = [
        // { label: "Certifications", value: 12, suffix: "+" },
        // { label: "Hackathons Won", value: 3, suffix: "" },
        // { label: "OSS Stars", value: 500, suffix: "+" },
        // { label: "Community Reach", value: 1000, suffix: "+" },
    ];

    return (
        <section id="achievements" className="py-24 relative bg-background/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <SectionLabel>Millestones</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
                        Honors & <span className="text-secondary italic">Achievements</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {achievements.map((achievement, i) => (
                        <AchievementCard key={i} achievement={achievement} />
                    ))}
                </div>

                {/* Stats Strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6 glass rounded-3xl border-primary/10">
                    {statStrip.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-heading font-black text-primary mb-2">
                                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/40">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

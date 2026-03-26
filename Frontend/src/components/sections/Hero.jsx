import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaChevronDown } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
    const { name, roles, bio, available } = portfolioData.personalInfo;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
    };

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[180px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.015)_1px,transparent_0)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-left"
                >
                    {available && (
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-500/5 border border-green-500/20 mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-400/90">Open to opportunities</span>
                        </motion.div>
                    )}

                    <motion.p variants={itemVariants} className="text-primary/70 font-bold uppercase tracking-[0.3em] text-xs mb-4">
                        Hey there, I'm 👋
                    </motion.p>

                    <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter mb-4 leading-[0.95]">
                        <span className="block">{name.split(' ')[0]}</span>
                        <span className="block gradient-text">{name.split(' ')[1]}</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-accent/70 mb-8 h-10 flex items-center">
                        <span className="text-accent/30 mr-2">{'>'}</span>
                        <TypeAnimation
                            sequence={[
                                ...roles.flatMap(role => [role, 2000]),
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            className="text-primary/90"
                        />
                        <span className="animate-pulse ml-0.5 text-primary">|</span>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-muted text-base max-w-lg mb-10 leading-relaxed">
                        {bio}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative px-8 py-4 bg-primary text-background font-bold text-xs uppercase tracking-[0.15em] rounded-xl overflow-hidden transition-shadow hover:shadow-glow-cyan"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-white/20 to-primary opacity-0 group-hover:opacity-100 transition-opacity shimmer" />
                        </motion.a>
                        <motion.a
                            href={portfolioData.personalInfo.resume}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-4 border border-white/10 text-accent/80 font-bold text-xs uppercase tracking-[0.15em] rounded-xl hover:border-white/25 hover:bg-white/[0.03] transition-all"
                        >
                            Download CV
                        </motion.a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-5 items-center">
                        <span className="w-8 h-[1px] bg-white/10" />
                        {[
                            { Icon: FaGithub, href: portfolioData.socialLinks.github },
                            { Icon: FaLinkedin, href: portfolioData.socialLinks.linkedin },
                            { Icon: FaTwitter, href: portfolioData.socialLinks.twitter },
                        ].map(({ Icon, href }, i) => (
                            <motion.a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, color: "#00F5FF" }}
                                className="text-accent/25 text-lg hover:text-primary transition-all duration-300"
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
                        {/* Glow Behind */}
                        <div className="absolute inset-[-20%] bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 rounded-full blur-[80px]" />

                        {/* Rotating Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-15px] rounded-full border border-dashed border-white/[0.06]"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-35px] rounded-full border border-white/[0.03]"
                        />

                        {/* Avatar */}
                        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/[0.08] shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 z-10" />
                            <img
                                src={portfolioData.personalInfo.avatar}
                                alt={name}
                                className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-1000 grayscale-[30%] hover:grayscale-0"
                            />
                        </div>

                        {/* Orbiting Badges */}
                        <TechBadge icon="React" color="#61DAFB" delay={0} radius={170} duration={14} />
                        <TechBadge icon="Node" color="#339933" delay={4} radius={200} duration={18} />
                        <TechBadge icon="TS" color="#3178C6" delay={8} radius={230} duration={22} />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent/20 flex flex-col items-center gap-2"
            >
                <span className="text-[9px] uppercase font-bold tracking-[0.4em]">Scroll</span>
                <FaChevronDown size={10} />
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};

const TechBadge = ({ icon, color, delay, radius, duration }) => {
    return (
        <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration, repeat: Infinity, ease: "linear", delay: -delay }}
            style={{ width: radius * 2, height: radius * 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        >
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-9 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center text-[9px] font-black uppercase"
                style={{ color, boxShadow: `0 0 25px ${color}22` }}
            >
                {icon}
            </motion.div>
        </motion.div>
    );
};

export default Hero;

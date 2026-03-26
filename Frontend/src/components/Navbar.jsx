import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(link => link.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                    ? 'py-3 bg-background/80 backdrop-blur-2xl border-b border-white/[0.04]'
                    : 'py-5 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-1">
                    <span className="text-xl font-heading font-black tracking-tight text-accent">
                        {portfolioData.personalInfo.initials}
                    </span>
                    <span className="text-xl font-heading font-black text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${activeSection === link.href.slice(1)
                                    ? 'text-primary'
                                    : 'text-accent/35 hover:text-accent/70'
                                }`}
                        >
                            {link.label}
                            {activeSection === link.href.slice(1) && (
                                <motion.div
                                    layoutId="activeNavIndicator"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-glow-cyan"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="hidden md:flex px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all"
                    >
                        Hire Me
                    </a>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <motion.span animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-accent/60 block" />
                        <motion.span animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} className="w-5 h-[1.5px] bg-accent/60 block" />
                        <motion.span animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-accent/60 block" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-white/[0.04]"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
                            {navLinks.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-[0.15em] transition-all ${activeSection === link.href.slice(1)
                                            ? 'text-primary bg-primary/5'
                                            : 'text-accent/40 hover:text-accent'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

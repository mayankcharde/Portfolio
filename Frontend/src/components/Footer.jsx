import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    const socials = [
        { Icon: FaGithub, href: portfolioData.socialLinks.github },
        { Icon: FaLinkedin, href: portfolioData.socialLinks.linkedin },
        { Icon: FaTwitter, href: portfolioData.socialLinks.twitter },
    ];

    return (
        <footer className="relative pt-20 pb-8 border-t border-white/[0.04]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <a href="#home" className="inline-block mb-4">
                            <span className="text-2xl font-heading font-black">
                                <span className="gradient-text">{portfolioData.personalInfo.initials}</span>
                                <span className="text-primary">.</span>
                            </span>
                        </a>
                        <p className="text-accent/30 text-sm leading-relaxed max-w-xs">
                            Building exceptional digital experiences with modern technologies and clean code.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent/50 mb-5">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            {quickLinks.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-accent/30 text-sm hover:text-primary transition-colors w-fit"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent/50 mb-5">Connect</h4>
                        <div className="flex gap-3">
                            {socials.map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-accent/30 hover:text-primary hover:border-primary/20 transition-all"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-accent/20 text-xs">
                        © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                    </p>
                    <p className="text-accent/20 text-xs flex items-center gap-1">
                        Built with <FaHeart className="text-rose-500/60" size={10} /> and React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

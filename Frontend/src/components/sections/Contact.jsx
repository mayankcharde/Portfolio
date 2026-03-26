import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import SectionLabel from '../ui/SectionLabel';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
    const { email, phone, location } = portfolioData.personalInfo;
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        await new Promise(r => setTimeout(r, 1500));
        setStatus('sent');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
    };

    const contactCards = [
        { icon: <FaEnvelope />, label: "Email", value: email, href: `mailto:${email}` },
        { icon: <FaPhone />, label: "Phone", value: phone, href: `tel:${phone}` },
        { icon: <FaMapMarkerAlt />, label: "Location", value: location },
    ];

    return (
        <section id="contact" className="py-28 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <SectionLabel>Get In Touch</SectionLabel>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">
                        Let's Build Something{' '}
                        <span className="gradient-text italic">Amazing</span>
                    </h2>
                    <p className="text-muted text-base mt-4 max-w-lg mx-auto">
                        Have a project in mind or want to collaborate? Drop me a message and I'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-4">
                        {contactCards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 4 }}
                                className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary/60 group-hover:text-primary transition-colors">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent/30 mb-0.5">{card.label}</p>
                                        {card.href ? (
                                            <a href={card.href} className="text-sm text-accent/70 hover:text-primary transition-colors">
                                                {card.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm text-accent/70">{card.value}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-2 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04]"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-accent text-sm placeholder:text-accent/20 focus:outline-none focus:border-primary/30 transition-colors"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-accent text-sm placeholder:text-accent/20 focus:outline-none focus:border-primary/30 transition-colors"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 mb-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-accent text-sm placeholder:text-accent/20 focus:outline-none focus:border-primary/30 transition-colors"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message..."
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3.5 mb-6 rounded-xl bg-white/[0.03] border border-white/[0.06] text-accent text-sm placeholder:text-accent/20 focus:outline-none focus:border-primary/30 resize-none transition-colors"
                        />

                        <motion.button
                            type="submit"
                            disabled={status === 'sending'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all ${status === 'sent'
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/20'
                                    : 'bg-primary text-background hover:shadow-glow-cyan'
                                }`}
                        >
                            {status === 'idle' && <><FaPaperPlane size={12} /> Send Message</>}
                            {status === 'sending' && <span className="animate-pulse">Sending...</span>}
                            {status === 'sent' && '✓ Message Sent!'}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

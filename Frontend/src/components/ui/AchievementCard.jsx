import { motion } from 'framer-motion';

const AchievementCard = ({ achievement, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
                {/* Icon */}
                <div className="text-3xl mb-4">{achievement.icon}</div>

                {/* Date Badge */}
                <span className="inline-block px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] rounded-full bg-secondary/5 text-secondary/60 border border-secondary/10 mb-3">
                    {achievement.date}
                </span>

                <h3 className="font-heading font-bold text-base text-accent mb-1 group-hover:text-primary transition-colors">
                    {achievement.title}
                </h3>
                <p className="text-accent/30 text-[10px] font-bold uppercase tracking-[0.1em] mb-3">{achievement.issuer}</p>
                <p className="text-accent/40 text-sm leading-relaxed">{achievement.description}</p>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
};

export default AchievementCard;

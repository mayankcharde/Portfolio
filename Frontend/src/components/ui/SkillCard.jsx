import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SkillCard = ({ skill }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // 3D Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);

        // Update CSS variables for the glow effect
        cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
        cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            layout
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="relative group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] cursor-default transition-colors duration-500 overflow-visible"
        >
            {/* Dynamic Background Glow */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${skill.color}15, transparent 40%)`,
                }}
            />

            {/* Icon Container with Tilt */}
            <div 
                style={{ transform: "translateZ(50px)" }}
                className="relative z-10 flex flex-col items-center gap-6"
            >
                <div
                    className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:border-opacity-40"
                    style={{ 
                        color: skill.color,
                        boxShadow: isHovered ? `0 0 30px ${skill.color}33` : 'none'
                    }}
                >
                    <skill.icon />
                </div>
                
                <div className="text-center">
                    <h3 className="font-heading font-bold text-base text-accent group-hover:text-white transition-colors">
                        {skill.name}
                    </h3>
                    <div 
                        className="w-8 h-1 bg-white/10 mx-auto mt-3 rounded-full overflow-hidden"
                    >
                        <motion.div 
                            className="h-full"
                            animate={{ 
                                width: isHovered ? "100%" : "30%",
                                backgroundColor: isHovered ? skill.color : "rgba(255,255,255,0.1)"
                            }}
                            style={{ 
                                boxShadow: isHovered ? `0 0 10px ${skill.color}` : 'none'
                             }}
                        />
                    </div>
                </div>
            </div>

            {/* Border Glow Effect */}
            <div 
                className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors pointer-events-none"
                style={{
                    boxShadow: isHovered ? `inset 0 0 20px ${skill.color}11` : 'none'
                }}
            />
        </motion.div>
    );
};

export default SkillCard;

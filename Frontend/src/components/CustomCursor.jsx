import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    // Only show on desktop
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
    }, []);

    if (isMobile) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                style={{ x: smoothX, y: smoothY }}
                animate={{
                    width: isHovering ? 50 : 32,
                    height: isHovering ? 50 : 32,
                    borderColor: isHovering ? 'rgba(0, 245, 255, 0.4)' : 'rgba(240, 238, 233, 0.1)',
                }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
            {/* Inner dot */}
            <motion.div
                style={{ x: cursorX, y: cursorY }}
                animate={{
                    width: isHovering ? 6 : 4,
                    height: isHovering ? 6 : 4,
                    backgroundColor: isHovering ? '#00F5FF' : '#F0EEE9',
                }}
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default CustomCursor;

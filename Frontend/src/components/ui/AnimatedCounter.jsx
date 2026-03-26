import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(from);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(from, to, {
                duration,
                onUpdate(value) {
                    setCount(Math.floor(value));
                },
                ease: "easeOut",
            });
            return () => controls.stop();
        }
    }, [from, to, duration, isInView]);

    return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default AnimatedCounter;

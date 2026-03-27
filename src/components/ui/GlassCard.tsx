import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard = ({ children, className, hoverEffect = true, ...props }: GlassCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hoverEffect ? { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" } : {}}
            className={cn(
                "backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl",
                "transition-colors duration-300",
                className
            )}
            {...(props as React.ComponentProps<typeof motion.div>)}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;

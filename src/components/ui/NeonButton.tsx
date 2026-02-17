import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent';
    className?: string;
    glow?: boolean;
}

const NeonButton = ({ children, variant = 'primary', className, glow = true, ...props }: NeonButtonProps) => {
    const colors = {
        primary: 'border-primary text-primary hover:bg-primary/10 shadow-[0_0_10px_rgba(0,243,255,0.3)]', // Cyan
        secondary: 'border-secondary text-secondary hover:bg-secondary/10 shadow-[0_0_10px_rgba(189,0,255,0.3)]', // Magenta
        accent: 'border-accent text-accent hover:bg-accent/10 shadow-[0_0_10px_rgba(0,255,157,0.3)]', // Green
    };

    const glowStyles = glow ? `hover:shadow-[0_0_20px_currentColor]` : '';

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-6 py-3 rounded-full border-2 font-bold tracking-wider uppercase text-sm transition-all duration-300",
                colors[variant],
                glowStyles,
                className
            )}
            {...props as any}
        >
            {children}
            {/* Glitch/Scanline effect could be added here */}
        </motion.button>
    );
};

export default NeonButton;

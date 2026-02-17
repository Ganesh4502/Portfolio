import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import NeonButton from '../ui/NeonButton';

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const roles = ["Designing Enthusiast", "Creative Technologist", "3D Environment Artist", "Frontend Developer"];

    // Rotating text effect
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* <HeroBackground /> */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-mono mb-4 tracking-widest text-sm md:text-base uppercase">
                        Hello, I am
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Ganesh
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                            Alla
                        </span>
                    </h1>

                    <div className="h-8 md:h-12 overflow-hidden mb-8">
                        <motion.p
                            key={textIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl text-muted-foreground font-mono"
                        >
                            {roles[textIndex]}
                        </motion.p>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg leading-relaxed px-4"
                    >
                        Specializing in 3D Environments, Cinematic Motion, and User-Centric Designs.
                        Bringing ideas to life through interdisciplinary technology and art.
                    </motion.p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <a href="#work" className="w-full md:w-auto">
                            <NeonButton variant="primary" className="w-full md:w-auto min-w-[160px]">
                                View Work
                            </NeonButton>
                        </a>
                        <a href="#contact" className="w-full md:w-auto">
                            <NeonButton variant="secondary" className="w-full md:w-auto min-w-[160px]">
                                Contact Me
                            </NeonButton>
                        </a>
                        <div className="flex gap-4 mt-4 md:mt-0 md:ml-4">
                            <a href="https://github.com/ganesh4502" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-primary/50 text-white hover:text-primary">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ganesh-alla-412558293" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-secondary/50 text-white hover:text-secondary">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>


        </section>
    );
};

export default Hero;

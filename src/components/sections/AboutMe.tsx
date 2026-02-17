import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import { Award, Code, Globe, Zap } from 'lucide-react';

const AboutMe = () => {
    return (
        <motion.section
            id="about"
            className="py-20 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="About Me"
                    subtitle="My Story & Passion"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Main Narrative */}
                    <GlassCard className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <Zap size={24} />
                            <h3 className="text-2xl font-bold">The Creative Technologist</h3>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I am an enthusiastic learner who is always excited to understand how things work and happen.
                            My passion lies in <span className="text-primary font-bold">Designing</span>, and I have gained
                            hands-on experience by working on various projects across 3D Environment Design,
                            UI/UX, and Video Editing.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I enjoy working on meaningful projects that solve real-world problems and allow me to learn
                            and grow. I'm constantly striving to sharpen my design skills and deepen my
                            understanding of 3D animations and VFX through continuous learning and building
                            creative side projects.
                        </p>
                    </GlassCard>

                    {/* Quick Highlights */}
                    <div className="space-y-6">
                        <GlassCard className="hover:border-secondary/50">
                            <div className="flex items-start gap-4">
                                <Award className="text-secondary shrink-0" size={28} />
                                <div>
                                    <h4 className="font-bold text-white mb-1">NCC B-Certificate</h4>
                                    <p className="text-sm text-gray-400 leading-snug">
                                        Cadet at GMRIT, demonstrating discipline, leadership, and teamwork.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard className="hover:border-accent/50">
                            <div className="flex items-start gap-4">
                                <Code className="text-accent shrink-0" size={28} />
                                <div>
                                    <h4 className="font-bold text-white mb-1">Coding Club Member</h4>
                                    <p className="text-sm text-gray-400 leading-snug">
                                        Organized technical events and workshops at GMRIT.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard className="hover:border-primary/50">
                            <div className="flex items-start gap-4">
                                <Globe className="text-primary shrink-0" size={28} />
                                <div>
                                    <h4 className="font-bold text-white mb-1">Languages</h4>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary">Telugu</span>
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary">English</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutMe;

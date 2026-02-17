import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import NeonButton from '../ui/NeonButton';
import { projects } from '../../data/projects';
import ProjectDetailsModal from '../ui/ProjectDetailsModal';

const FeaturedWork = () => {
    const featuredProjects = projects.filter(p => p.featured);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="work" className="py-20 bg-black/50">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Selected Works"
                />

                <div className="space-y-20 md:space-y-32">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                        >
                            {/* Visual Side */}
                            <div
                                onClick={() => openModal(project)}
                                className="w-full md:w-3/5 aspect-video rounded-2xl overflow-hidden relative group shadow-2xl shadow-primary/5 border border-white/10 cursor-pointer"
                            >
                                {project.mediaType === 'video' && project.mediaUrl ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                    >
                                        <source src={project.mediaUrl} type="video/mp4" />
                                    </video>
                                ) : project.image.startsWith('/') || project.image.startsWith('http') ? (
                                    <>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-overlay`} />
                                    </>
                                ) : (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <NeonButton variant="primary" className="scale-90 group-hover:scale-100 transition-transform">View Details</NeonButton>
                                </div>
                                {/* Overlay for text readability on hover */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-2/5 flex flex-col items-start text-left">
                                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {project.shortDescription}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tools.map((tool, i) => (
                                        <span key={i} className="text-xs font-mono text-gray-400 border border-white/10 px-2 py-1 rounded">
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => openModal(project)}
                                        className="flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                                    >
                                        View Case Study <ArrowRight size={16} />
                                    </button>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
                                            <Github size={18} /> Source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectDetailsModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default FeaturedWork;

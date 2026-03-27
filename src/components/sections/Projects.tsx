import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import ProjectDetailsModal from '../ui/ProjectDetailsModal';

const categories = ["All", "3D", "Video", "Design", "Web"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => {
            // Basic category matching logic
            if (activeCategory === "3D") return p.category.includes("3D");
            if (activeCategory === "Video") return p.category.includes("Video");
            if (activeCategory === "Web") return p.category.includes("Web");
            if (activeCategory === "Design") return p.category.includes("Design");
            return p.category === activeCategory;
        });

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <SectionHeading title="All Projects" subtitle="Explore My Work" />

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                                : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => openModal(project)}
                                className="cursor-pointer"
                            >
                                <GlassCard className="h-full group hover:border-primary/50 transition-colors">
                                    {project.image.startsWith('/') || project.image.startsWith('http') || project.image.startsWith('./') ? (
                                        <div className="h-40 w-full rounded-lg mb-4 overflow-hidden relative">
                                            <img
                                                loading="lazy"
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${project.imageGradient ? project.imageGradient.replace('from-', 'from-transparent via-transparent to-') : 'from-transparent to-black'} opacity-50`} />
                                        </div>
                                    ) : (
                                        <div className={`h-40 w-full rounded-lg mb-4 ${project.image} ${project.imageGradient || 'bg-gray-800'} opacity-50 group-hover:opacity-80 transition-opacity`} />
                                    )}
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                                        <span className="text-xs font-mono px-2 py-1 rounded bg-white/10">{project.category}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.shortDescription}</p>
                                    <div className="flex gap-2 flex-wrap mt-auto">
                                        {project.tools.slice(0, 3).map(t => (
                                            <span key={t} className="text-xs text-muted-foreground border border-white/5 px-1.5 py-0.5 rounded">#{t}</span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <ProjectDetailsModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Projects;

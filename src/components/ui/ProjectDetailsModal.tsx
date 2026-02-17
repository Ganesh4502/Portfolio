import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Play, Youtube } from 'lucide-react';
import type { Project } from '../../data/projects';
import NeonButton from '../ui/NeonButton';

interface ProjectDetailsModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const getEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('youtu.be')) {
        videoId = url.split('/').pop()?.split('?')[0] || '';
    } else if (url.includes('v=')) {
        videoId = url.split('v=')[1]?.split('&')[0] || '';
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
};

const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-primary/10"
                        >
                            {/* Sticky Close Button */}
                            <div className="sticky top-0 right-0 w-full flex justify-end p-4 z-50 pointer-events-none">
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-colors pointer-events-auto shadow-lg"
                                    title="Close Project Details"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Media Header */}
                            <div className={`w-full h-64 md:h-96 relative ${project.imageGradient || 'bg-gray-900'} flex items-center justify-center overflow-hidden -mt-16`}>
                                {project.mediaType === 'video' ? (
                                    <div className="w-full h-full">
                                        {project.mediaUrl?.includes('youtube.com') || project.mediaUrl?.includes('youtu.be') ? (
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={getEmbedUrl(project.mediaUrl || '')}
                                                title={project.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            ></iframe>
                                        ) : project.mediaUrl ? (
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                                poster={project.image}
                                            >
                                                <source src={project.mediaUrl} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <div className="flex flex-col items-center gap-4 h-full justify-center">
                                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                                    <Play size={32} className="ml-1 text-white" />
                                                </div>
                                                <p className="text-sm text-white/70 font-mono">Video Coming Soon</p>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        {project.image.startsWith('/') || project.image.startsWith('http') ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-60"
                                            />
                                        ) : (
                                            <div className="text-center p-8">
                                                <h3 className="text-4xl font-bold text-white/20 uppercase tracking-widest">{project.category}</h3>
                                            </div>
                                        )}
                                    </>
                                )}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                            </div>

                            {/* Content Body */}
                            <div className="p-6 md:p-10 space-y-8">
                                <div className="space-y-6">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-primary font-mono text-sm tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                            {project.category}
                                        </span>
                                        {project.tools.map((tool, i) => (
                                            <span key={i} className="text-xs font-mono text-gray-400 border border-white/10 px-2 py-1 rounded bg-white/5">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">{project.title}</h2>
                                    <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                                        {project.fullDescription}
                                    </p>

                                    {/* Gallery Grid */}
                                    {project.gallery && (
                                        <div className="mt-8">
                                            <h3 className="text-2xl font-bold mb-6 text-white">Project Gallery</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {project.gallery.map((item, index) => {
                                                    const url = typeof item === 'string' ? item : item.url;
                                                    const caption = typeof item === 'string' ? null : item.caption;

                                                    return (
                                                        <div key={index} className="flex flex-col gap-2">
                                                            <motion.div
                                                                whileHover={{ scale: 1.02 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                onClick={() => setSelectedImage(url)}
                                                                className={`aspect-[3/4] rounded-xl overflow-hidden shadow-lg cursor-pointer border border-white/5 hover:border-primary/50 transition-colors ${url.startsWith('bg-') ? url : 'bg-gray-800'}`}
                                                            >
                                                                {!url.startsWith('bg-') && (
                                                                    <img
                                                                        src={url}
                                                                        alt={caption || `Poster ${index + 1}`}
                                                                        loading="lazy"
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                )}
                                                                {url.startsWith('bg-') && (
                                                                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                                                                        <span className="text-white/20 font-bold text-xl mb-2">#{index + 1}</span>
                                                                        {caption && <span className="text-white/60 text-xs font-mono">{caption}</span>}
                                                                    </div>
                                                                )}
                                                            </motion.div>
                                                            {caption && (
                                                                <p className="text-center text-xs text-muted-foreground font-mono">{caption}</p>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                                    {project.link && (
                                        <NeonButton
                                            variant="primary"
                                            className="flex items-center gap-2"
                                            onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                                        >
                                            View Live Project <ExternalLink size={18} />
                                        </NeonButton>
                                    )}
                                    {project.github && (
                                        <NeonButton
                                            variant="secondary"
                                            className="flex items-center gap-2"
                                            onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                                        >
                                            View Source Code <Github size={18} />
                                        </NeonButton>
                                    )}
                                    {(project.youtubeVideoUrl || project.youtubeChannelUrl) && (
                                        <div className="flex gap-4">
                                            {project.youtubeVideoUrl && (
                                                <NeonButton
                                                    variant="accent"
                                                    className="flex items-center gap-2 bg-red-600/10 hover:bg-red-600/20 text-red-500 border-red-600/30"
                                                    onClick={() => window.open(project.youtubeVideoUrl, '_blank', 'noopener,noreferrer')}
                                                >
                                                    Watch on YouTube <Youtube size={18} />
                                                </NeonButton>
                                            )}
                                            {project.youtubeChannelUrl && (
                                                <NeonButton
                                                    variant="secondary"
                                                    className="flex items-center gap-2"
                                                    onClick={() => window.open(project.youtubeChannelUrl, '_blank', 'noopener,noreferrer')}
                                                >
                                                    Visit Channel <Youtube size={18} />
                                                </NeonButton>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Close Button */}
                                <div className="flex justify-center pt-8 border-t border-white/5">
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono text-sm tracking-widest uppercase transition-all border border-white/10 hover:border-white/20"
                                    >
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Lightbox Overlay */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImage(null)}
                                className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                            >
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-70"
                                >
                                    <X size={32} />
                                </button>
                                <motion.div
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.9 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="max-w-full max-h-full overflow-auto rounded-lg shadow-2xl relative"
                                >
                                    {selectedImage.startsWith('bg-') ? (
                                        <div className={`${selectedImage} w-[80vw] h-[80vh] rounded-lg flex items-center justify-center`}>
                                            <p className="text-white/50 text-2xl font-mono">Full Screen Preview</p>
                                        </div>
                                    ) : (
                                        <img
                                            src={selectedImage}
                                            alt="Full screen view"
                                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                        />
                                    )}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailsModal;

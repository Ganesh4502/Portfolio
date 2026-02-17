// React import removed
import { Monitor, Video, Paintbrush, Code } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

const Capabilities = () => {
    const capabilities = [
        {
            icon: <Monitor size={40} className="text-primary" />,
            title: "3D Environment Design",
            description: "Designing realistic environments using Blender, focusing on hard-surface modeling, PBR texturing, and cinematic lighting to create moody atmospheres.",
            tools: ["Blender", "Geometry Nodes", "Hard Surface Modeling", "PBR Texturing"]
        },
        {
            icon: <Video size={40} className="text-secondary" />,
            title: "Video Editing",
            description: "Crafting title teasers and short films. Specializing in precise cuts, pacing, suspense building, and sound effect syncing.",
            tools: ["DaVinci Resolve", "CapCut", "Audio Sync"]
        },
        {
            icon: <Paintbrush size={40} className="text-accent" />,
            title: "Visual Design",
            description: "Designing impactful event posters, YouTube thumbnails, and basic UI layouts with a focus on clean visual appeal.",
            tools: ["Canva", "Figma", "Microsoft Office"]
        },
        {
            icon: <Code size={40} className="text-primary" />,
            title: "Frontend Development",
            description: "Building responsive web applications and admin panels using core web technologies to manage information effectively.",
            tools: ["HTML", "CSS", "JavaScript", "React"]
        }
    ];

    return (
        <section id="capabilities" className="py-20 relative">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Capabilities"
                    subtitle="What I Do"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {capabilities.map((cap, index) => (
                        <GlassCard key={index} className="flex flex-col h-full group hover:border-primary/30">
                            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                                {cap.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                {cap.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                                {cap.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {cap.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;

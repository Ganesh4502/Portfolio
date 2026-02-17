// React import removed
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const timelineData = [
    {
        year: "2023",
        title: "Joined GMRIT & NCC",
        subtitle: "B.Tech Computer Science | NCC Cadet",
        description: "Started B.Tech CSE journey at GMRIT. Simultaneously joined NCC, embracing discipline and leadership training alongside academic pursuits."
    },
    {
        year: "2024",
        title: "Coding Club & Web Dev",
        subtitle: "Active Member | Frontend Developer",
        description: "Joined the Coding Club as an active member. Developed the NCC Web App to streamline internal processes, applying frontend skills to real-world problems."
    },
    {
        year: "2025",
        title: "NCC B-Certificate",
        subtitle: "Achievement Unlocked",
        description: "Successfully completed NCC B-Certificate training. Demonstrated resilience, teamwork, and commitment to service."
    },
    {
        year: "Ongoing",
        title: "Creative Tech Exploration",
        subtitle: "3D Art & Motion Design",
        description: "Continuing to master Blender, DaVinci Resolve, and generative AI. Created immersive projects like 'Car Animation', 'Hacker Server Room' and 'Paradox' teaser."
    }
];

const Journey = () => {
    return (
        <section id="journey" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <SectionHeading title="My Journey" subtitle="Education & Experience" />

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 transform md:-translate-x-1/2" />

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block w-1/2" />

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_#00f3ff] z-10 transform -translate-x-1/2 mt-1.5" />

                            {/* Content */}
                            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                                <div className={`p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                    }`}>
                                    <span className="text-primary font-mono text-sm tracking-widest">{item.year}</span>
                                    <h3 className="text-xl font-bold mt-1 mb-1">{item.title}</h3>
                                    <div className="text-sm text-secondary font-medium mb-3">{item.subtitle}</div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;

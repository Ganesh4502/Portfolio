import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import NeonButton from '../ui/NeonButton';
import GlassCard from '../ui/GlassCard';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const ACCESS_KEY = "f6ddad55-4aed-48f9-b6f2-a0f440e85f36"; // User needs to replace this



        setIsSubmitting(true);

        const formPayload = {
            ...formData,
            access_key: ACCESS_KEY,
            subject: `New Portfolio Message from ${formData.name}`,
            from_name: "Personal Portfolio"
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formPayload),
            });

            const result = await response.json();

            if (result.success) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                console.error("Web3Forms Error:", result);
                alert(result.message || "Something went wrong. Please check your Access Key or try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Submission failed. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4">
                <SectionHeading title="Let's Build Something" subtitle="Get In Touch" />

                <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-8"
                    >
                        <h3 className="text-3xl font-bold">Ready to start a project?</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to drop a message.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <a href="mailto:ganesh115784@gmail.com" className="block text-muted-foreground hover:text-white transition-colors">ganesh115784@gmail.com</a>
                                    <a href="mailto:23341A4502@gmrit.edu.in" className="block text-muted-foreground hover:text-white transition-colors">23341A4502@gmrit.edu.in</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-secondary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Location</h4>
                                    <p className="text-muted-foreground">India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p className="text-muted-foreground">+91 9347473069</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1"
                    >
                        <GlassCard className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <NeonButton
                                    type="submit"
                                    variant={isSuccess ? "accent" : "primary"}
                                    className="w-full flex justify-center items-center gap-2"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>Sending... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                                    ) : isSuccess ? (
                                        "Message Sent Successfully!"
                                    ) : (
                                        <>Send Message <Send size={18} /></>
                                    )}
                                </NeonButton>
                                {isSuccess && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center text-sm text-secondary mt-2"
                                    >
                                        I'll get back to you soon!
                                    </motion.p>
                                )}
                            </form>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

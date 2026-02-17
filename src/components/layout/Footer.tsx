// React import removed
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center bg-black/50 backdrop-blur-sm">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <a href="#" className="text-2xl font-bold font-mono tracking-tighter block mb-2">
                        <span className="text-primary">&lt;</span>
                        Create
                        <span className="text-secondary">Tech</span>
                        <span className="text-primary">/&gt;</span>
                    </a>
                    <p className="text-muted-foreground text-sm">
                        Building the future, one pixel at a time.
                    </p>
                </div>

                <div className="flex space-x-6 mb-6 md:mb-0">
                    <a href="https://github.com/ganesh4502" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/ganesh-alla-412558293" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Youtube size={20} /></a>
                    <a href="mailto:Ganesh115784@gmail.com" className="text-muted-foreground hover:text-white transition-colors"><Mail size={20} /></a>
                </div>

                <div className="text-center md:text-right text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Creative Technologist.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

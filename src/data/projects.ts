export interface Project {
    id: string;
    title: string;
    category: "3D Environment" | "Video Edit" | "Web Application" | "Design" | "Motion Graphics" | "3D" | "Video" | "Web"; // Normalized categories
    shortDescription: string;
    fullDescription: string;
    tools: string[];
    image: string; // Placeholder CSS class or image URL
    imageGradient?: string; // For gradients if no image
    mediaType: "image" | "video" | "gallery";
    mediaUrl?: string; // Main video or image URL
    gallery?: (string | { url: string; caption: string })[]; // Array of image URLs or objects with captions
    link?: string;
    github?: string;
    featured?: boolean;
    youtubeVideoUrl?: string;
    youtubeChannelUrl?: string;
}

export const projects: Project[] = [
    {
        id: "car-animation",
        title: "Realistic Car Animation",
        category: "3D Environment",
        shortDescription: "A cinematic 3D car animation focusing on realism and complex motion.",
        fullDescription: "Developed a realistic car animation in Blender, utilizing advanced geometry nodes and procedural materials. Focused on achieving cinematic motion and lighting to bring the vehicle to life in a dynamic environment.",
        tools: ["Blender", "Geometry Nodes", "Procedural Materials", "Animation"],
        image: "public/Car_Animation/Raw.png",
        imageGradient: "from-slate-800 via-gray-900 to-black",
        mediaType: "video",
        mediaUrl: "public/Car_Animation/Render.mp4",
        gallery: [
            { url: "public/Car_Animation/Raw.png", caption: "Raw Image" },
            { url: "public/Car_Animation/Geomentry_nodes.png", caption: "Geometry Nodes Setup" },
            { url: "public/Car_Animation/Material.png", caption: "Material Setup" },
            { url: "public/Car_Animation/Wireframe.png", caption: "Wireframe View" }
        ],
        featured: true
    },
    {
        id: "server-room",
        title: "Realistic Hacker Server Room",
        category: "3D Environment",
        shortDescription: "A highly detailed, cinematic 3D render of a futuristic server room.",
        fullDescription: "Designed and modeled a realistic hacker-style server room environment using Blender. Created detailed assets including server racks, multi-monitor setup, desk, chair, cables, and props. Applied realistic materials and PBR textures for walls, flooring, electronics, and furniture. Implemented moody cinematic lighting to achieve a dark, immersive cyber atmosphere. Used screen emissive shaders and UI-style displays to enhance the hacking theme.",
        tools: ["Blender", "Cinematic Lighting", "Emissive Shaders"],
        image: "public/Hacker_Environment/Rendered.png", // Rendered Image Main
        imageGradient: "from-cyan-900 via-blue-900 to-black",
        mediaType: "gallery",
        gallery: [
            { url: "public/Hacker_Environment/Rendered.png", caption: "Rendered Image" },
            { url: "public/Hacker_Environment/Raw.png", caption: "Raw Image" },
            { url: "public/Hacker_Environment/Geometry_nodes.png", caption: "Geometric Nodes" },
            { url: "public/Hacker_Environment/Wireframe.png", caption: "Wireframe View" },
            { url: "public/Hacker_Environment/Material.png", caption: "Material Setup" }
        ],
        featured: false
    },
    {
        id: "ncc-web",
        title: "NCC Web App (Front-end)",
        category: "Web Application",
        shortDescription: "A front-end web application designed to manage tests and notes for NCC GMRIT.",
        fullDescription: "Designed and developed a front-end web application to manage tests, check notes, and to get a basic knowledge about the NCC in GMRIT. Implemented features like event listings, admin panel, Tests and Notes using HTML, CSS and JS. Took initiative as a Cadet to enhance internal processes through a fully functional, user-friendly platform.",
        tools: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
        image: "public/NCC Web-app/Home.png",
        imageGradient: "from-green-900 via-emerald-900 to-black",
        mediaType: "video",
        mediaUrl: "public/NCC Web-app/Hero vedio.mp4",
        link: "https://ganesh4502.github.io/Ganesh_NCC/",
        github: "https://github.com/ganesh4502/Ganesh_NCC",
        gallery: [
            { url: "public/NCC Web-app/Home.png", caption: "Home Page" },
            { url: "public/NCC Web-app/About Page.png", caption: "About Page" },
            { url: "public/NCC Web-app/Events page - admin.png", caption: "Events Admin Panel" },
            { url: "public/NCC Web-app/Login Page.png", caption: "Login Page" },
            { url: "public/NCC Web-app/Notes page - admin.png", caption: "Notes Admin Panel" },
            { url: "public/NCC Web-app/Rankers details page.png", caption: "Rankers Details" },
            { url: "public/NCC Web-app/Test page - admin.png", caption: "Test Admin Panel" }
        ],
        featured: true
    },
    {
        id: "paradox-teaser",
        title: "PARADOX - Title Teaser",
        category: "Video Edit",
        shortDescription: "A cinematic title teaser for the short film 'Paradox'.",
        fullDescription: "Edited a cinematic title teaser for the upcoming short film “Paradox” using DaVinci Resolve. Applied precise cuts, pacing, and transitions to build suspense and narrative impact. Designed and animated title text and visual elements to match the film’s theme. Synced sound effects and background music for emotional and dramatic effect.",
        tools: ["DaVinci Resolve", "Sound Design", "Visual Effects"],
        image: "public/paradox/paradox_thumbnail.png", // User provided thumbnail
        imageGradient: "from-red-900 via-orange-900 to-black",
        mediaType: "video",
        mediaUrl: "public/paradox/paradox_title_original.mp4",
        youtubeVideoUrl: "https://www.youtube.com/watch?v=Ly3tUyJ-D7s",
        youtubeChannelUrl: "https://www.youtube.com/@KV_Productions-F4",
        featured: true
    },
    {
        id: "scifi-env",
        title: "Realistic Scifi-Env",
        category: "3D Environment",
        shortDescription: "An immersive alien planet environment with strange glowing flora.",
        fullDescription: "Designed and created a realistic sci-fi environment using Blender with a focus on visual realism. Implemented hard-surface modeling and modular assets for detailed environment design. Applied PBR texturing and realistic materials to enhance surface detail and authenticity.",
        tools: ["Blender", "PBR", "Hard Surface Modeling"],
        image: "public/Sci-fi Environment/render.png", // Rendered Image Main
        imageGradient: "from-purple-900 via-fuchsia-900 to-black",
        mediaType: "gallery",
        gallery: [
            { url: "public/Sci-fi Environment/render.png", caption: "Rendered Image" },
            { url: "public/Sci-fi Environment/raw.png", caption: "Raw Image" },
            { url: "public/Sci-fi Environment/geomentry.png", caption: "Geometric Nodes" },
            { url: "public/Sci-fi Environment/wireframe.png", caption: "Wireframe View" },
            { url: "public/Sci-fi Environment/material.png", caption: "Material Setup" }
        ],
        featured: false
    },
    {
        id: "ott-ui",
        title: "OTT Platform UI",
        category: "Design",
        shortDescription: "Basic UI design for a simple OTT platform.",
        fullDescription: "Created a Basic UI design for a simple Ott platform, which have multiple pages like Home, Search, Categories and profile. Improved skills in Designing using Figma.",
        tools: ["UI Design", "Figma"],
        image: "public/OTT Platform UI/hero image.png",
        mediaType: "video",
        mediaUrl: "public/OTT Platform UI/Hero Vedio.mp4",
        link: "https://www.figma.com/proto/QZP8LMZUHZkHntswdDP5SR/Untitled?page-id=0%3A1&node-id=13-536&starting-point-node-id=8%3A462&t=C5MQptlGxFkZ2fil-1",
        featured: false
    },
    {
        id: "event-posters",
        title: "Event Posters",
        category: "Design",
        shortDescription: "Event posters and YouTube thumbnails designed with Canva.",
        fullDescription: "Designed event posters and YouTube thumbnails using Canva with a focus on clean layout and visual appeal. Improved skills in typography, color usage, and digital design.",
        tools: ["Canva"],
        image: "public/Canva_Edits/Hero_image.png",
        imageGradient: "from-blue-600 via-purple-600 to-black",

        mediaType: "gallery",
        gallery: [
            { url: "public/Canva_Edits/Dusshera.png", caption: "Dusshera Poster" },
            { url: "public/Canva_Edits/Ganesh Chaturthi.png", caption: "Ganesh Chaturthi Poster" },
            { url: "public/Canva_Edits/Indian NAVY day.png", caption: "Indian NAVY Day" },
            { url: "public/Canva_Edits/Milad UN-Nabi.png", caption: "Milad UN-Nabi" },
            { url: "public/Canva_Edits/NATIONAL UNITY DAY (2).png", caption: "National Unity Day" },
            { url: "public/Canva_Edits/National Sports day.png", caption: "National Sports Day" },
            { url: "public/Canva_Edits/October-2nd.png", caption: "October 2nd" },
            { url: "public/Canva_Edits/Onam.png", caption: "Onam Poster" },
            { url: "public/Canva_Edits/Sovenier Index.png", caption: "Sovenier Index" }
        ],
        featured: false
    },
    {
        id: "youtube-thumbnails",
        title: "YouTube Thumbnails",
        category: "Design",
        shortDescription: "Engaging YouTube thumbnails designed for high CTR.",
        fullDescription: "created various YouTube thumbnails for different niches, focusing on readability, color contrast, and emotional appeal to drive clicks.",
        tools: ["Canva"],
        image: "public/paradox/paradox_thumbnail.png",
        imageGradient: "from-orange-900 via-red-900 to-black",
        mediaType: "gallery",
        youtubeChannelUrl: "https://www.youtube.com/@KV_Productions-F4",
        gallery: [
            { url: "public/paradox/paradox_thumbnail.png", caption: "Paradox - Movie Title Design" }
        ],
        featured: false
    },
    {
        id: "internship-review",
        title: "Internship Review",
        category: "Design",
        shortDescription: "A comprehensive review of my professional internship focusing on UI/UX insights.",
        fullDescription: "Documented and analyzed my professional internship experience, focusing on UI/UX design processes, project outcomes, and key professional growth. This review covers wireframing, prototyping, and the iterative design cycles I participated in.",
        tools: ["Figma", "UI/UX Analysis", "Documentation"],
        image: "public/Internship/Home page.png",
        imageGradient: "from-indigo-900 via-blue-900 to-black",
        mediaType: "video",
        mediaUrl: "public/Internship/Hero%20Vedio.mp4",
        gallery: [
            { url: "public/Internship/Home page.png", caption: "Home Page" },
            { url: "public/Internship/Home - Light mode.png", caption: "Home Page - Light Mode" },
            { url: "public/Internship/About Setion 1.png", caption: "About Section - 1" },
            { url: "public/Internship/About Section 2.png", caption: "About Section - 2" },
            { url: "public/Internship/Works section - 1.png", caption: "Works Section - 1" },
            { url: "public/Internship/Works Section - 2.png", caption: "Works Section - 2" },
            { url: "public/Internship/Skills gained.png", caption: "Skills Gained" }
        ],
        link: "https://www.figma.com/proto/fjnL6cLzviqb7vMBQh2glM/My-Portfolio?page-id=0%3A1&node-id=46-61&p=f&viewport=157%2C110%2C0.04&t=xYEdHlnjlarzhuvx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
        featured: false
    }
];



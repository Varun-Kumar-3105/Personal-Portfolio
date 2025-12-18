import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaShieldAlt, FaRobot, FaMicrophone, FaUserCheck } from 'react-icons/fa';

const projects = [
    {
        title: "Connect – Redefining Meaningful Digital Interaction",
        category: "UI/UX Design",
        description: "Designed an intuitive, visually engaging mobile interface with a clean layout and seamless user flow to enhance user engagement and accessibility. Focused on creating a user-centered design that prioritizes meaningful digital interactions.",
        tags: ["Figma", "UI/UX", "Mobile Design", "User Flow", "Prototyping"],
        icon: <FaRobot />,
        color: "from-purple-500 to-cyan-500"
    },
    {
        title: "Doctor Appointment Chatbot",
        category: "Full-Stack Development",
        description: "Developed a full-stack Django application, an AI-powered chatbot for doctor appointments, urgent care, and multilingual symptom recording and translation using NLP. Integrated natural language processing to provide seamless user experience.",
        tags: ["Django", "AI", "NLP", "Python", "Chatbot", "Full-Stack"],
        icon: <FaRobot />,
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "Vulnerability Assessment Tool Using DVWA",
        category: "Cybersecurity",
        description: "Developed a system to assess web application vulnerabilities, including Cross-Site Scripting (XSS), SQL Injection, Denial of Service (DoS) attacks, and cryptographic weaknesses, using the Damn Vulnerable Web Application (DVWA) platform.",
        tags: ["XSS", "SQL Injection", "DoS", "DVWA", "Cybersecurity", "Ethical Hacking"],
        icon: <FaShieldAlt />,
        color: "from-red-500 to-orange-500"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-br from-[#110c2a] to-[#1a0f3a] rounded-2xl overflow-hidden border border-[#2a0e61] hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
        >
            {/* Animated Background Gradient */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Glassmorphism Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-8 relative z-10">
                {/* Icon with Glow Effect */}
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl text-white mb-6 shadow-lg group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-shadow duration-300`}
                >
                    {project.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {project.title}
                </h3>

                {/* Category Badge */}
                <div className="inline-block mb-4">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                        {project.category}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-4 group-hover:text-gray-300 transition-colors">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 rounded-full bg-[#2a0e61]/50 border border-[#2a0e61] text-gray-300 text-xs hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-medium group/btn"
                    >
                        <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
                        <span>Code</span>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-medium group/btn"
                    >
                        <FaExternalLinkAlt className="group-hover/btn:rotate-12 transition-transform" />
                        <span>Demo</span>
                    </motion.button>
                </div>
            </div>

            {/* Corner Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="w-full py-20 px-4 z-20 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16"
                >
                    Featured Projects
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="w-full md:w-[calc(50%-1rem)] max-w-[500px]">
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

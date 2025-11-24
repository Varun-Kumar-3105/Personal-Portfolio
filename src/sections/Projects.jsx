import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaShoppingCart, FaRobot } from 'react-icons/fa';

const projects = [
    {
        title: "Farmacy",
        category: "AI-Powered Crop Advisory",
        description: "AI-driven, mobile-first platform for personalized crop advisory and disease detection. Integrated Google Gemini’s multi-modal capabilities for intelligent disease diagnoses. Built with React Native (Expo) and FastAPI.",
        tags: ["React Native", "Expo", "Google Gemini", "FastAPI", "AI"],
        icon: <FaRobot />,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "AIProctorLock",
        category: "Secure Remote Examination",
        description: "Web-based AI-powered platform for secure remote interviews and examinations. Features restricted navigation, screen control, and real-time proctoring dashboards. Built with React.js.",
        tags: ["React.js", "AI Proctoring", "Web Security", "Real-time"],
        icon: <FaServer />,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Offline RAG Chatbot",
        category: "AI/ML - DRDO Project",
        description: "Developed an offline RAG-based chatbot using vector database technology for secure, local data processing. The system operates entirely offline using Ollama for inference and ChromaDB for vector storage, ensuring complete data privacy and security for sensitive information.",
        tags: ["Ollama", "ChromaDB", "RAG", "Python", "Vector DB", "Offline AI"],
        icon: <FaRobot />,
        color: "from-purple-500 to-pink-500"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-[#110c2a] rounded-xl overflow-hidden border border-[#2a0e61] hover:border-purple-500/50 transition-colors duration-300"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

            <div className="p-8 relative z-10">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl text-white mb-6 shadow-lg`}>
                    {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {project.title}
                </h3>

                <p className="text-purple-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                    {project.category}
                </p>

                <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#2a0e61]/50 border border-[#2a0e61] text-gray-300 text-xs">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-medium">
                        <FaGithub /> Code
                    </button>
                    <button className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-medium">
                        <FaExternalLinkAlt /> Demo
                    </button>
                </div>
            </div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaRobot } from 'react-icons/fa';

const experiences = [
    {
        title: "Software Associate Engineer",
        company: "Nexnora Technologies Pvt. Ltd.",
        date: "April 2025 – Present",
        description: "Designed and developed responsive and scalable frontend interfaces for Farmacy and AIProctorLock. Collaborated with backend and AI teams for seamless API integration. Delivered pixel-perfect UI implementations with cross-platform compatibility. Focused on reusable components, accessibility standards, and optimized rendering.",
        tech: "React.js, React Native, TypeScript, JavaScript, Node.js, Expo Go, Flutter, Dart",
        icon: <FaBriefcase />,
        color: "from-purple-500 to-cyan-500"
    },
    {
        title: "Intern & Major Project",
        company: "DRDO",
        date: "Internship",
        description: "Developed an offline RAG-based chatbot using vector database technology. Implemented secure, local solutions for sensitive data processing. The system operates entirely offline, ensuring data privacy and security.",
        tech: "Ollama, ChromaDB, RAG, Python, Vector Database",
        icon: <FaRobot />,
        color: "from-blue-500 to-purple-500"
    }
];

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
            {/* Timeline Line */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-[#030014] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_20px_rgba(112,66,248,0.5)]">
                <div className="text-white text-lg">{experience.icon}</div>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#110c2a] p-6 rounded-xl border border-[#2a0e61] shadow-lg hover:shadow-[0_0_30px_rgba(42,14,97,0.5)] transition-shadow duration-300">
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${experience.color} blur-[50px] opacity-20 rounded-full pointer-events-none`}></div>
                <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                <p className="text-purple-300 font-semibold">{experience.company}</p>
                <p className="text-gray-400 text-sm mb-4">{experience.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                    {experience.description}
                </p>
                {experience.tech && (
                    <p className="text-purple-400 text-sm mt-4 font-mono">
                        Tech Stack: {experience.tech}
                    </p>
                )}
            </div>
        </motion.div >
    );
};

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-20 z-20 relative">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
                Experience
            </h2>

            <div className="relative w-full max-w-4xl px-4 flex flex-col gap-12">
                {/* Central Line */}
                <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 md:-translate-x-1/2 h-full"></div>

                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Experience;

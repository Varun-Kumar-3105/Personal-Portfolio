import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaTrophy, FaCertificate } from 'react-icons/fa';

const skillCategories = [
    {
        title: "UI/UX Skills",
        skills: ["Wireframing", "Prototyping", "User Flows", "User Research", "Usability Testing", "Visual Design", "Design Systems", "Accessibility"],
        icon: <FaCode />,
        color: "from-purple-500 to-cyan-500"
    },
    {
        title: "Frameworks",
        skills: ["Django", "User-centered Design", "Double Diamond Design", "Design Thinking"],
        icon: <FaTools />,
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "Tools",
        skills: ["Figma", "Components", "Auto-layout", "Prototyping", "Design System", "Canva", "Webflow", "Google Sheets/Forms"],
        icon: <FaTools />,
        color: "from-green-500 to-teal-500"
    }
];

const achievements = [
    {
        title: "UI/UX Design Course",
        description: "Completed Internshala's UI/UX Design Course, gaining hands-on experience through real-world projects and developing strong practical skills in user interface design and user experience principles.",
        icon: <FaCode />
    },
    {
        title: "Student Coordinator - DAPCom-2024",
        description: "Coordinated activities for the International Conference on Data Acquisition, Processing, and Communication (29th Feb–2nd Mar 2024).",
        icon: <FaTrophy />
    },
    {
        title: "Cybersecurity Training",
        description: "Completed the 7th Edition of the Indo-Dutch Cyber Security School and AICTE Cybersecurity Virtual Internship, gaining hands-on exposure to cybersecurity fundamentals and advanced international practices.",
        icon: <FaTrophy />
    }
];

const certifications = [
    "Software Engineer – Saylor Academy",
    "Database Programming with SQL – Oracle",
    "UI/UX Design Course – Internshala",
    "Indo-Dutch Cyber Security School (7th Edition)",
    "AICTE Cybersecurity Virtual Internship"
];

const Skills = () => {
    return (
        <div className="w-full py-20 px-4 z-20 relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
                    Skills & Achievements
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative bg-gradient-to-br from-[#110c2a] to-[#1a0f3a] p-6 rounded-2xl border border-[#2a0e61] hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-hidden group"
                        >
                            {/* Animated Background */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-2xl`}
                                animate={{
                                    scale: [1, 1.3, 1],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-xl shadow-lg`}
                                    >
                                        {category.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.05 }}
                                            whileHover={{ scale: 1.15, y: -3 }}
                                            className="px-3 py-2 rounded-lg bg-[#2a0e61] border border-purple-500/30 text-gray-300 text-sm font-medium hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-white transition-all cursor-default shadow-sm"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Corner Glow */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                        </motion.div>
                    ))}
                </div>

                {/* Achievements & Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-[#110c2a] p-6 rounded-xl border border-[#2a0e61]"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FaTrophy className="text-yellow-500" /> Achievements
                        </h3>
                        <div className="space-y-6">
                            {achievements.map((item, index) => (
                                <div key={index}>
                                    <h4 className="text-purple-400 font-semibold mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-[#110c2a] p-6 rounded-xl border border-[#2a0e61]"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FaCertificate className="text-cyan-500" /> Certifications
                        </h3>
                        <ul className="space-y-4">
                            {certifications.map((cert, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

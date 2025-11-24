import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaTrophy, FaCertificate } from 'react-icons/fa';

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["C/C++", "Java", "Python", "JavaScript", "Dart"],
        icon: <FaCode />,
        color: "from-purple-500 to-cyan-500"
    },
    {
        title: "Tools & Frameworks",
        skills: ["React Native", "Flutter", "React.js", "Node.js", "HTML/CSS", "Jupyter Notebook", "Visual Studio"],
        icon: <FaTools />,
        color: "from-cyan-500 to-blue-500"
    }
];

const achievements = [
    {
        title: "Competitive Programming",
        description: "Solved 300+ problems on Hackerrank, LeetCode, GeeksforGeeks. Proficient in algorithms, data structures, dynamic programming, arrays, strings, trees, and graphs.",
        icon: <FaCode />
    },
    {
        title: "Hackathon Winner",
        description: "Awarded Best Project under the Theme of Next-Gen Communication for Customer Feedback Amplified at Hack-Arena Hackathon conducted by Guru Nanak Institutions (Nov 2024).",
        icon: <FaTrophy />
    }
];

const certifications = [
    "Certified in Full Stack development",
    "Certified in GDSC-Cloud Essentials and Gen-AI",
    "Certified in AI/ML"
];

const Skills = () => {
    return (
        <div className="w-full py-20 px-4 z-20 relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
                    Skills & Achievements
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#110c2a] p-6 rounded-xl border border-[#2a0e61]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-xl`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-[#2a0e61] border border-purple-500/30 text-gray-300 text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
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

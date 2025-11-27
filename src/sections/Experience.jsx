import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaRobot } from 'react-icons/fa';

const experiences = [
    {
        title: "Front-End Developer",
        company: "Dussap IT Solutions",
        date: "July 2025 – Present",
        description: "Developing Shop-Next-Door, a seamless e-commerce mobile application similar to Zepto using React Native and Expo. Building dynamic and responsive UI screens in VS Code, ensuring smooth navigation, optimized performance, and consistent design across Android and iOS platforms. Integrating geolocation, category filtering, and cart management features to deliver a rich buyer–seller experience. Collaborating closely with the backend team to connect REST APIs, manage product data, and ensure end-to-end functionality.",
        tech: "React Native, Expo, JavaScript, REST APIs, VS Code",
        icon: <FaBriefcase />,
        color: "from-purple-500 to-cyan-500"
    },
    {
        title: "Web Development Intern",
        company: "PratekCorp",
        date: "Oct 2024 – Dec 2024",
        description: "Developed and deployed a web application with Weebly and React, enhancing frontend interactivity. Optimized UX/UI, improved performance, and implemented accessibility refinements. Collaborated in an agile, US-based remote team environment, ensuring smooth delivery.",
        tech: "React, Weebly, JavaScript, UX/UI Design",
        icon: <FaCode />,
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "AI/ML Intern",
        company: "Rinex",
        date: "May 2022 – July 2022",
        description: "Worked with Microsoft Azure for model training, deployment, and data preprocessing. Gained practical exposure to Python-based ML workflows and AIML for chatbot development. Strengthened expertise in applying ML algorithms to real-world datasets.",
        tech: "Microsoft Azure, Python, AIML, Machine Learning",
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

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative flex flex-col h-screen w-full items-center justify-center z-10">
            <div className="flex flex-col items-center justify-center w-full h-full max-w-[1200px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-400 mb-4"
                    >
                        Hi, I'm
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4"
                    >
                        Mahesh Raju
                    </motion.h1>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            UI/UX Designer
                        </span>{" "}
                        with hands-on experience in{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                            Mobile & Web Interfaces
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl max-w-[800px] mb-10">
                        UI/UX Designer with hands-on experience designing mobile and web interfaces using Figma. Strong understanding of user-centered design, visual hierarchy, and clean user flows. Skilled in creating intuitive layouts, wireframes, and prototypes, and collaborating with teams to deliver effective designs.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-opacity"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-purple-500 text-purple-400 font-semibold hover:bg-purple-500/10 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;

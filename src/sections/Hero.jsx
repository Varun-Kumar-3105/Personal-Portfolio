import React from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaPalette, FaMobile, FaLaptopCode } from 'react-icons/fa';

const Hero = () => {
    const floatingIcons = [
        { Icon: FaFigma, delay: 0, color: 'from-purple-500 to-pink-500', position: 'top-20 left-10' },
        { Icon: FaPalette, delay: 0.2, color: 'from-cyan-500 to-blue-500', position: 'top-40 right-20' },
        { Icon: FaMobile, delay: 0.4, color: 'from-pink-500 to-purple-500', position: 'bottom-32 left-20' },
        { Icon: FaLaptopCode, delay: 0.6, color: 'from-blue-500 to-cyan-500', position: 'bottom-20 right-10' }
    ];

    return (
        <div className="relative flex flex-col h-screen w-full items-center justify-center z-10 overflow-hidden">
            {/* Floating Design Icons */}
            {floatingIcons.map(({ Icon, delay, color, position }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 8,
                        delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute ${position} hidden lg:block`}
                >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} opacity-20 blur-xl flex items-center justify-center`}>
                        <Icon className="text-white text-2xl" />
                    </div>
                </motion.div>
            ))}

            <div className="flex flex-col items-center justify-center w-full h-full max-w-[1200px] mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col items-center justify-center text-center relative"
                >
                    {/* Animated Background Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl rounded-full"
                    />

                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative mb-4"
                    >
                        <span className="text-lg md:text-xl text-gray-400 font-light tracking-wider">
                            Hi, I'm
                        </span>
                    </motion.div>

                    {/* Name with Animated Gradient */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative mb-6"
                    >
                        <motion.span
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                        >
                            Mahesh Raju
                        </motion.span>
                    </motion.h1>

                    {/* Title with Glassmorphism Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-6 relative"
                    >
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
                            <h2 className="text-2xl md:text-4xl font-bold text-white">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                    UI/UX Designer
                                </span>
                                <span className="text-gray-300 mx-2">×</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                    Creative Developer
                                </span>
                            </h2>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-gray-400 text-base md:text-lg max-w-[700px] mb-10 leading-relaxed"
                    >
                        Crafting <span className="text-purple-400 font-semibold">pixel-perfect</span> mobile and web interfaces with{" "}
                        <span className="text-cyan-400 font-semibold">Figma</span>.
                        Specializing in user-centered design, seamless user flows, and{" "}
                        <span className="text-pink-400 font-semibold">delightful interactions</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold overflow-hidden shadow-lg"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View My Work
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600"
                                initial={{ x: '100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full border-2 border-purple-500/50 backdrop-blur-sm bg-purple-500/10 text-purple-300 font-bold hover:bg-purple-500/20 hover:border-purple-400 transition-all shadow-lg"
                        >
                            Let's Connect
                        </motion.a>
                    </motion.div>

                    {/* Design Skills Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-wrap gap-3 justify-center mt-12 max-w-[600px]"
                    >
                        {['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems'].map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3 + index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-gray-300 text-sm font-medium backdrop-blur-sm hover:border-purple-400/50 transition-all cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;

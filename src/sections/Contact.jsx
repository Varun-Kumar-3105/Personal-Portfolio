import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-full py-20 px-4 z-20 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
                >
                    Let's Create Together
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
                >
                    Ready to bring your ideas to life? Let's collaborate on your next project.
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-[#110c2a] to-[#1a0f3a] p-8 rounded-2xl border border-[#2a0e61] shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                    Get In Touch
                                </span>
                            </h3>

                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:maheshrajupallapu2@gmail.com"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                                        <span className="text-sm">maheshrajupallapu2@gmail.com</span>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href="tel:+916302429120"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                                        <span className="text-sm">+91 6302429120</span>
                                    </div>
                                </motion.a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#2a0e61]">
                                <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                                <div className="flex gap-3">
                                    <motion.a
                                        href="https://github.com/Pallapumaheshraju"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 rounded-xl bg-[#2a0e61] flex items-center justify-center text-white hover:bg-purple-600 transition-colors shadow-lg"
                                    >
                                        <FaGithub size={20} />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/mahesh-raju-pallapu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 rounded-xl bg-[#2a0e61] flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg"
                                    >
                                        <FaLinkedin size={20} />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-[#110c2a] to-[#1a0f3a] p-8 rounded-2xl border border-[#2a0e61] shadow-xl relative overflow-hidden">
                            {/* Animated Background */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.2, 0.1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 blur-3xl"
                            />

                            <div className="relative z-10">
                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full bg-[#030014] border border-[#2a0e61] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full bg-[#030014] border border-[#2a0e61] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Message</label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows="4"
                                                    placeholder="Tell me about your project..."
                                                    className="w-full bg-[#030014] border border-[#2a0e61] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                                                ></textarea>
                                            </div>

                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                        />
                                                        <span>Transmitting...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaPaperPlane />
                                                        <span>Send Message</span>
                                                    </>
                                                )}
                                            </motion.button>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="flex flex-col items-center justify-center py-12 text-center"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                                className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                                            >
                                                <FaCheckCircle className="text-white text-4xl" />
                                            </motion.div>

                                            <motion.h3
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-3"
                                            >
                                                Message Dispatched! ✨
                                            </motion.h3>

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="text-gray-400 mb-2"
                                            >
                                                Your message has been successfully transmitted through the digital ether.
                                            </motion.p>

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="text-sm text-purple-400 font-mono"
                                            >
                                                → Handshake Complete | Latency: 0ms | UX Optimized ✓
                                            </motion.p>

                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 }}
                                                className="mt-6 text-gray-500 text-sm"
                                            >
                                                I'll get back to you within 24 hours!
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-[#030014] border-t border-[#ffffff1a] mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Mahesh Raju Pallapu. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Pallapumaheshraju" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/mahesh-raju-pallapu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

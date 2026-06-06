import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import Container from "../ui/Container";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function Hero() {
    const [currentTime, setCurrentTime] = useState('');
    
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('id-ID', { hour12: false });
            setCurrentTime(timeStr);
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const yOffset = -80;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center pt-32 pb-12 sm:pt-36 sm:pb-16">
            <Container>
                <div className="max-w-6xl mx-auto">
                    <AnimationWrapper>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Profile Picture */}
                            <motion.div
                                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="lg:col-span-4 flex justify-center lg:justify-start"
                            >
                                <div className="relative group">
                                    {/* Outer border frame */}
                                    <div className="absolute -inset-2 border border-tech-border group-hover:border-tech-green/30 transition-all duration-300" />
                                    {/* Image container */}
                                    <div className="relative bg-tech-card border border-tech-border overflow-hidden w-64 h-64 sm:w-72 sm:h-72">
                                        <img
                                            src="/images/profile.jpg"
                                            alt="Mohamad Deni Yulio"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                            {/* Content */}
                            <div className="lg:col-span-8 text-left space-y-8">
                            {/* Terminal Header */}
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center justify-between border-b border-tech-border pb-3 mb-6"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="ml-3 text-slate-500 text-sm font-mono">deni@portfolio ~</span>
                                </div>
                                <div className="text-slate-500 text-sm font-mono">
                                    AVAILABLE {currentTime}     
                                </div>
                            </motion.div>

                            {/* Name */}
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tighter"
                            >
                                MOHAMAD DENI YULIO
                            </motion.h1>

                            {/* Role */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                className="space-y-2"
                            >
                                <span className="inline-block text-lg sm:text-xl md:text-2xl font-bold text-slate-400 tracking-wider">
                                    FULL-STACK DEVELOPER
                                </span>
                            </motion.div>

                            {/* Tagline */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                                className="space-y-4"
                            >
                                <p className="text-xl sm:text-2xl font-bold text-slate-200">
                                    BUILDING <span className="text-tech-green">MODERN</span> WEB APPS
                                </p>
                                <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                                    A dedicated Full-Stack Developer — turning complex problems into simple, clean, and scalable solutions.
                                </p>
                            </motion.div>

                            {/* Quick Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                                className="flex flex-wrap gap-8 pt-4"
                            >
                                <div className="space-y-1">
                                    <span className="text-slate-500 text-xs sm:text-sm uppercase tracking-wider">Location</span>
                                    <p className="text-slate-200 text-sm sm:text-base font-medium">Bandung, Indonesia</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-slate-500 text-xs sm:text-sm uppercase tracking-wider">Focus on</span>
                                    <p className="text-slate-200 text-sm sm:text-base font-medium">Full-Stack</p>
                                </div>
                            </motion.div>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                                className="flex flex-wrap gap-4 pt-2"
                            >
                                <a
                                    href="#projects"
                                    onClick={(e) => handleScroll(e, "#projects")}
                                    className="px-6 py-3 bg-tech-green/10 text-tech-green hover:bg-tech-green/20 border border-tech-green/30 font-mono text-sm transition-all duration-150 flex items-center gap-2 active:scale-[0.98]"
                                >
                                    <span className="font-bold">$</span>
                                    <span>VIEW PROJECTS</span>
                                </a>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleScroll(e, "#contact")}
                                    className="px-6 py-3 border border-tech-border text-slate-300 hover:border-slate-600 hover:text-slate-100 font-mono text-sm transition-all duration-150 active:scale-[0.98]"
                                >
                                    LET'S TALK
                                </a>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                                className="flex gap-4 pt-4"
                            >
                                {[
                                    { icon: FaGithub, href: "https://github.com/xDeniiXz" },
                                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohamad-deni-yulio-754680366?utm_source=share_via&utm_content=profile&utm_medium=member_android2" },
                                    { icon: FaInstagram, href: "https://www.instagram.com/dnii.xz?igsh=cjFkYnJ0cXd5NGlo" },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 border border-tech-border text-slate-400 hover:text-tech-green hover:border-tech-green/30 hover:bg-tech-green/5 flex items-center justify-center transition-all duration-150 active:scale-[0.95]"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </motion.div>
                        </div>
                        </div>
                    </AnimationWrapper>
                </div>
            </Container>
        </section>
    );
}

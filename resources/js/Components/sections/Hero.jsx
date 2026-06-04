import React from "react";
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
    const handleScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const yOffset = -80; // Offset for the floating navbar
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    return (
        <section id="home" className="min-h-screen flex items-center pt-28 pb-12 sm:pt-32 sm:pb-16">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <AnimationWrapper>
                        <div className="text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight mb-2"
                            >
                                Mohamad Deni Yulio
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            >
                                <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                    Full-Stack Developer
                                </span>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.2,
                                }}
                                className="text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-400 mb-6"
                            >
                                Building modern, clean, and efficient web applications.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.3,
                                }}
                                className="text-sm sm:text-base text-slate-500 mb-8 max-w-lg"
                            >
                                Passionate about creating beautiful, user-friendly experiences with clean code and modern technologies.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.4,
                                }}
                                className="flex flex-wrap gap-4 mb-8"
                            >
                                <a
                                    href="#projects"
                                    onClick={(e) => handleScroll(e, "#projects")}
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-all duration-150 flex items-center gap-2 active:scale-[0.98] hover:-translate-y-0.5"
                                >
                                    <span>View Projects</span>
                                    <FaArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleScroll(e, "#contact")}
                                    className="px-6 py-3 border border-slate-700 text-slate-300 hover:border-slate-600 hover:text-slate-100 rounded-xl font-medium text-sm transition-all duration-150 active:scale-[0.98] hover:-translate-y-0.5"
                                >
                                    Contact Me
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.5,
                                }}
                                className="flex gap-4"
                            >
                                {[
                                    {
                                        icon: FaGithub,
                                        href: "https://github.com/xDeniiXz",
                                        color: "bg-slate-800/60 hover:bg-slate-800",
                                    },
                                    {
                                        icon: FaLinkedin,
                                        href: "https://www.linkedin.com/in/mohamad-deni-yulio-754680366?utm_source=share_via&utm_content=profile&utm_medium=member_android2",
                                        color: "bg-blue-500/10 hover:bg-blue-500/20",
                                    },
                                    {
                                        icon: FaInstagram,
                                        href: "https://www.instagram.com/dnii.xz?igsh=cjFkYnJ0cXd5NGlo",
                                        color: "bg-purple-500/10 hover:bg-purple-500/20",
                                    },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-150 active:scale-[0.95] hover:-translate-y-0.5 ${
                                            social.href.includes("instagram")
                                                ? "hover:text-purple-400"
                                                : "hover:text-blue-400"
                                        } ${social.color || "bg-slate-900/80"}`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </motion.div>
                        </div>
                    </AnimationWrapper>

                    <AnimationWrapper delay={0.3}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border border-slate-800">
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute inset-0 -z-10">
                                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-full bg-blue-600/20 blur-3xl" />
                            </div>
                        </motion.div>
                    </AnimationWrapper>
                </div>
            </Container>
        </section>
    );
}

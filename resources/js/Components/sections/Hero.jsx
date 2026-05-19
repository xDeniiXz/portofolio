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
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(80);

    const titles = ["Full-Stack Developer"];
    const period = 800;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, typingSpeed);

        return () => clearInterval(ticker);
    }, [displayText, isDeleting]);

    const tick = () => {
        const i = loopNum % titles.length;
        const fullText = titles[i];

        setDisplayText(
            isDeleting
                ? fullText.substring(0, displayText.length - 1)
                : fullText.substring(0, displayText.length + 1),
        );

        setTypingSpeed(isDeleting ? 30 : 80);

        if (!isDeleting && displayText === fullText) {
            setTimeout(() => setIsDeleting(true), period);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimationWrapper>
                        <div className="text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            >
                                Mohamad Deni Yulio
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.2,
                                }}
                                className="text-xl md:text-2xl text-gray-300 mb-6 h-10"
                            >
                                <span>{displayText}</span>
                                <span className="animate-pulse text-blue-400">
                                    |
                                </span>
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.4,
                                }}
                                className="text-lg text-gray-400 mb-10"
                            >
                                Passionate about building modern web
                                applications with clean code and elegant
                                designs. Let's create something amazing
                                together!
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.6,
                                }}
                                className="flex flex-wrap gap-4 mb-12"
                            >
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                                >
                                    <span>View Projects</span>
                                    <FaArrowRight className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-full font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                                >
                                    Contact Me
                                </motion.a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.8,
                                }}
                                className="flex space-x-6"
                            >
                                {[
                                    {
                                        icon: FaGithub,
                                        href: "https://github.com/xDeniiXz",
                                        color: "hover:text-gray-200",
                                    },
                                    {
                                        icon: FaLinkedin,
                                        href: "https://www.linkedin.com/in/mohamad-deni-yulio-754680366?utm_source=share_via&utm_content=profile&utm_medium=member_android2",
                                        color: "hover:text-blue-400",
                                    },
                                    {
                                        icon: FaInstagram,
                                        href: "https://www.instagram.com/dnii.xz?igsh=cjFkYnJ0cXd5NGlo",
                                        color: "hover:text-pink-400",
                                    },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{
                                            scale: 1.3,
                                            y: -5,
                                            rotate: 5,
                                        }}
                                        className={`text-gray-500 ${social.color} transition-colors duration-300`}
                                    >
                                        <social.icon className="w-7 h-7" />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </AnimationWrapper>

                    <AnimationWrapper delay={0.3}>
                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-gray-700">
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <motion.div
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    rotate: {
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    },
                                    scale: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}
                                className="absolute inset-0 -z-10"
                            >
                                <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl" />
                            </motion.div>
                        </motion.div>
                    </AnimationWrapper>
                </div>
            </Container>
        </section>
    );
}

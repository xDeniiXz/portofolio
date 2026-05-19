import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import Container from "./ui/Container";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 },
        );

        navLinks.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/85 backdrop-blur-xl border-b border-gray-800">
            <Container>
                <div className="flex justify-between items-center h-20">
                    <motion.a
                        href="#home"
                        onClick={(e) => handleScroll(e, "#home")}
                        whileHover={{ scale: 1.05 }}
                        className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        DeniiXz
                    </motion.a>

                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive =
                                activeSection === link.href.substring(1);
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    whileHover={{ y: -3 }}
                                    className={clsx(
                                        "text-sm font-semibold transition-all duration-300 relative",
                                        isActive
                                            ? "text-blue-400"
                                            : "text-gray-400 hover:text-blue-400",
                                    )}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavLink"
                                            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                        />
                                    )}
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </nav>
    );
}

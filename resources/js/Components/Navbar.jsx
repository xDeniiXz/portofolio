import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X, ChevronRight } from "lucide-react";
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        setIsMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/85 backdrop-blur-xl border-b border-gray-800">
                <Container>
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        <motion.a
                            href="#home"
                            onClick={(e) => handleScroll(e, "#home")}
                            whileHover={{ scale: 1.05 }}
                            className="text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        >
                            DeniiXz
                        </motion.a>

                        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                            {navLinks.map((link) => {
                                const isActive =
                                    activeSection === link.href.substring(1);
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        whileHover={{ y: -2 }}
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
                                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </Container>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-16 z-40 bg-gray-900/98 backdrop-blur-xl border-b border-gray-800 lg:hidden"
                    >
                        <div className="py-4 px-6 space-y-2">
                            {navLinks.map((link) => {
                                const isActive =
                                    activeSection === link.href.substring(1);
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={clsx(
                                            "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200",
                                            isActive
                                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                                : "text-gray-300 hover:bg-gray-800 hover:text-white",
                                        )}
                                    >
                                        {link.name}
                                        {isActive && <ChevronRight className="w-4 h-4" />}
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

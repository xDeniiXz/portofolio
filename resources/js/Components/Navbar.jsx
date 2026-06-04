import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X, Code2 } from "lucide-react";
import Container from "./ui/Container";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
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
            {
                threshold: 0.3,
                rootMargin: "-80px 0px 0px 0px", // Offset for floating navbar
            },
        );

        // Observe in reverse order so that top sections get priority
        [...navLinks].reverse().forEach((link) => {
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
            const yOffset = -80; // Offset for the floating navbar
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
                <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800/60 rounded-2xl shadow-xl">
                    <Container className="!px-4 sm:!px-6">
                        <div className="flex justify-between items-center h-16">
                            <motion.a
                                href="#home"
                                onClick={(e) => handleScroll(e, "#home")}
                                whileHover={{ scale: 1.03 }}
                                className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-100"
                            >
                                <Code2 className="w-6 h-6 text-blue-400" />
                                DeniiXz
                            </motion.a>

                            <div className="hidden lg:flex items-center space-x-1">
                                {navLinks.map((link) => {
                                    const isActive =
                                        activeSection === link.href.substring(1);
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) =>
                                                handleScroll(e, link.href)
                                            }
                                            whileHover={{ y: -1 }}
                                            className={clsx(
                                                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                                                isActive
                                                    ? "bg-blue-600 text-white"
                                                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                                            )}
                                        >
                                            {link.name}
                                        </motion.a>
                                    );
                                })}
                            </div>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                            >
                                {isMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </Container>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-4 top-24 z-40 lg:hidden"
                    >
                        <div className="bg-slate-900/95 backdrop-blur-2xl border border-slate-800/60 rounded-2xl shadow-xl py-3 px-4 space-y-1">
                            {navLinks.map((link) => {
                                const isActive =
                                    activeSection === link.href.substring(1);
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) =>
                                            handleScroll(e, link.href)
                                        }
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={clsx(
                                            "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                                            isActive
                                                ? "bg-blue-600 text-white"
                                                : "text-slate-300 hover:bg-slate-800/60",
                                        )}
                                    >
                                        {link.name}
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

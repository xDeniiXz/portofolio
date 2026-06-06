import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import Container from "./ui/Container";

const navLinks = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "resume", href: "#resume" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
];

const NAVBAR_OFFSET = 96;
const OBSERVER_THRESHOLDS = Array.from(
    { length: 11 },
    (_, index) => index / 10,
);

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animationFrameRef = useRef(null);

    const handleScroll = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);

        const target = document.querySelector(href);
        if (target) {
            const y =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                NAVBAR_OFFSET;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const updateActiveSection = useCallback(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        if (!sections.length) {
            return;
        }

        const viewportHeight = window.innerHeight;
        const activationLine = NAVBAR_OFFSET + viewportHeight * 0.18;

        const visibleSections = sections
            .map((section) => {
                const rect = section.getBoundingClientRect();
                const visibleTop = Math.max(rect.top, NAVBAR_OFFSET);
                const visibleBottom = Math.min(rect.bottom, viewportHeight);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                return {
                    id: section.id,
                    rectTop: rect.top,
                    visibleHeight,
                    isVisible: visibleHeight > 0,
                    coversActivationLine:
                        rect.top <= activationLine &&
                        rect.bottom >= activationLine,
                    distanceToNavbar: Math.abs(rect.top - NAVBAR_OFFSET),
                };
            })
            .filter((section) => section.isVisible);

        if (!visibleSections.length) {
            const isAtPageBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2;

            if (isAtPageBottom) {
                setActiveSection("contact");
            }
            return;
        }

        const prioritizedSection = visibleSections.find(
            (section) => section.coversActivationLine,
        );

        const nextSection =
            prioritizedSection ??
            [...visibleSections].sort(
                (a, b) =>
                    b.visibleHeight - a.visibleHeight ||
                    a.distanceToNavbar - b.distanceToNavbar ||
                    a.rectTop - b.rectTop,
            )[0];

        setActiveSection((current) =>
            current === nextSection.id ? current : nextSection.id,
        );
    }, []);

    useEffect(() => {
        const scheduleActiveSectionUpdate = () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            animationFrameRef.current = requestAnimationFrame(() => {
                updateActiveSection();
            });
        };

        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        if (!sections.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            () => {
                scheduleActiveSectionUpdate();
            },
            {
                threshold: OBSERVER_THRESHOLDS,
                rootMargin: `-${NAVBAR_OFFSET}px 0px -55% 0px`,
            },
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        window.addEventListener("scroll", scheduleActiveSectionUpdate, {
            passive: true,
        });
        window.addEventListener("resize", scheduleActiveSectionUpdate);

        scheduleActiveSectionUpdate();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", scheduleActiveSectionUpdate);
            window.removeEventListener("resize", scheduleActiveSectionUpdate);

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [updateActiveSection]);

    return (
        <>
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
                <div className="bg-tech-card/90 backdrop-blur-xl border border-tech-border">
                    <Container className="!px-4 sm:!px-6">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-100 font-mono">
                                <span className="text-tech-green">\</span>
                                DeniiXz
                            </div>

                            <div className="hidden lg:flex items-center space-x-2">
                                {navLinks.map((link) => {
                                    const isActive =
                                        activeSection === link.href.substring(1);
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) =>
                                                handleScroll(e, link.href)
                                            }
                                            className={clsx(
                                                "px-3 py-2 text-sm font-mono transition-colors duration-150 uppercase tracking-wider",
                                                isActive
                                                    ? "text-tech-green"
                                                    : "text-slate-500 hover:text-slate-300"
                                            )}
                                        >
                                            {isActive && <span className="text-tech-green mr-1">#</span>}
                                            {link.name}
                                        </a>
                                    );
                                })}
                            </div>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-2 text-slate-400 hover:text-tech-green transition-colors"
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
                        <div className="bg-tech-card/95 backdrop-blur-xl border border-tech-border py-4 px-6 space-y-3">
                            {navLinks.map((link) => {
                                const isActive =
                                    activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) =>
                                            handleScroll(e, link.href)
                                        }
                                        className={clsx(
                                            "flex items-center py-2 text-base font-mono transition-colors duration-150 uppercase tracking-wider",
                                            isActive
                                                ? "text-tech-green"
                                                : "text-slate-500 hover:text-slate-300",
                                        )}
                                    >
                                        {isActive && <span className="text-tech-green mr-2">#</span>}
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

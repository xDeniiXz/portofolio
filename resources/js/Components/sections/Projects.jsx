import React, { useState } from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";
import Toast from "../ui/Toast";

const projects = [
    {
        id: 1,
        title: "Grocery Store Web App",
        description:
            "Back-office tool for fast-paced daily operations to help staff complete tasks efficiently.",
        tech: ["Laravel", "Tailwind", "Laragon", "MySQL"],
        image: "/images/project1.png",
        github: "https://github.com/xDeniiXz/xzgg-store",
        demo: "#",
        isPrivate: false,
    },
    {
        id: 2,
        title: "Online Library Web App",
        description:
            "Dual-role application for both students and librarians with different user experiences.",
        tech: ["Laravel", "Tailwind", "Laragon", "MySQL"],
        image: "/images/project2.png",
        github: "https://github.com/xDeniiXz/xz-library",
        demo: "#",
        isPrivate: false,
    },
    {
        id: 3,
        title: "Transport Management System",
        description:
            "Yard management module for a logistics TMS, handling trucks, trailers, and containers.",
        tech: ["Vue", "NestJS", "PostgreSQL", "Docker"],
        image: "/images/project3.png",
        github: "#",
        demo: "#",
        isPrivate: true,
    },
];

const ProjectCard = ({ project, onDemoClick, onCodeClick }) => {
    return (
        <div
            className="bg-tech-card border border-tech-border hover:border-tech-green/30 transition-all duration-150 flex flex-col h-full"
        >
            <div className="h-36 sm:h-40 overflow-hidden flex-shrink-0 border-b border-tech-border">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-slate-100 line-clamp-1 font-mono">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3 flex-grow font-mono">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-slate-400 text-[11px] font-mono border border-tech-border uppercase tracking-wider"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2 mt-auto">
                                    {project.isPrivate ? (
                                        <button
                                            onClick={() => onCodeClick(project)}
                                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-slate-400 hover:text-tech-green border border-tech-border font-mono text-xs transition-all duration-150 active:scale-[0.98]"
                                        >
                                            <FaCode className="w-3 h-3" />
                                            <span className="uppercase tracking-wider">Code</span>
                                        </button>
                                    ) : (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-slate-400 hover:text-tech-green border border-tech-border font-mono text-xs transition-all duration-150 active:scale-[0.98]"
                                        >
                                            <FaCode className="w-3 h-3" />
                                            <span className="uppercase tracking-wider">Code</span>
                                        </a>
                                    )}

                                    <button
                                        onClick={() => onDemoClick(project)}
                                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-tech-green/10 text-tech-green hover:bg-tech-green/20 border border-tech-green/30 font-mono text-xs transition-all duration-150 active:scale-[0.98]"
                                    >
                                        <FaExternalLinkAlt className="w-3 h-3" />
                                        <span className="uppercase tracking-wider">Demo</span>
                                    </button>
                                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    const [toast, setToast] = useState({
        isVisible: false,
        message: "",
        type: "info",
    });

    const handleDemoClick = () => {
        setToast({
            isVisible: true,
            message: "This demo is still under development.",
            type: "info",
        });
    };

    const handleCodeClick = (project) => {
        if (project.isPrivate) {
            setToast({
                isVisible: true,
                message: "Sorry, this code is private.",
                type: "warning",
            });
        }
    };

    const handleToastClose = () => {
        setToast((prev) => ({ ...prev, isVisible: false }));
    };

    return (
        <section
            id="projects"
            className="py-16 sm:py-20 lg:py-24 scroll-mt-24"
        >
            <Container>
                <SectionTitle subtitle="Selected work">
                    PROJECTS
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <AnimationWrapper key={project.id} delay={index * 0.12}>
                            <ProjectCard
                                project={project}
                                onDemoClick={handleDemoClick}
                                onCodeClick={handleCodeClick}
                            />
                        </AnimationWrapper>
                    ))}
                </div>
            </Container>

            <Toast
                isVisible={toast.isVisible}
                onClose={handleToastClose}
                message={toast.message}
                type={toast.type}
            />
        </section>
    );
}

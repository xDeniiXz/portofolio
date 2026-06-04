import React, { useState } from "react";
import { motion } from "framer-motion";
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
        <motion.div
            whileHover={{ y: -4 }}
            className="bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex flex-col h-full"
        >
            <div className="h-36 sm:h-40 overflow-hidden flex-shrink-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100 line-clamp-1">
                    {project.title}
                </h3>

                <p className="text-slate-400 text-sm sm:text-base mb-3 leading-relaxed line-clamp-2 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-slate-800/60 text-slate-300 text-xs sm:text-sm rounded-full border border-slate-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2 mt-auto">
                    {project.isPrivate ? (
                        <button
                            onClick={() => onCodeClick(project)}
                            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-800/60 text-slate-300 rounded-xl hover:bg-slate-800 transition-all duration-150 text-sm active:scale-[0.98] hover:-translate-y-0.5"
                        >
                            <FaCode className="w-4 h-4" />
                            <span className="font-medium">Code</span>
                        </button>
                    ) : (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-800/60 text-slate-300 rounded-xl hover:bg-slate-800 transition-all duration-150 text-sm active:scale-[0.98] hover:-translate-y-0.5"
                        >
                            <FaCode className="w-4 h-4" />
                            <span className="font-medium">Code</span>
                        </a>
                    )}

                    <button
                        onClick={() => onDemoClick(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-150 text-sm active:scale-[0.98] hover:-translate-y-0.5"
                    >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="font-medium">Demo</span>
                    </button>
                </div>
            </div>
        </motion.div>
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
                <SectionTitle subtitle="Some things I've built">
                    Projects
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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

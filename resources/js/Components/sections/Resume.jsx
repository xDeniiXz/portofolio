import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";
import {
    FaDownload,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from "react-icons/fa";

const experiences = [
    {
        year: "Aug 2025 - Nov 2025",
        title: "Full Stack Developer",
        company: "PT. Arkamaya",
        description: "Building modern web applications for various clients",
    },
];

const educations = [
    {
        year: "2023 - 2026",
        degree: "Software Engineer",
        school: "SMK Angkasa 1 Margahayu",
        description: "Focus on Software Engineering",
    },
];

const techHighlights = [
    "Laravel",
    "React",
    "Vue.js",
    "MySQL",
    "Node.js",
    "NestJS",
    "Docker",
    "GitLab",
];

export default function Resume() {
    return (
        <section id="resume" className="py-16 scroll-mt-20">
            <Container>
                <SectionTitle subtitle="My professional journey">
                    Resume
                </SectionTitle>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left: Download CV & Highlights */}
                    <AnimationWrapper>
                        <div className="space-y-6">
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <FaBriefcase className="text-blue-400 w-4 h-4" />
                                    Resume Overview
                                </h3>
                                <p className="text-gray-300 text-sm mb-5">
                                    Comprehensive resume showcasing my
                                    professional experience, education, and
                                    technical skills.
                                </p>

                                <div className="space-y-3">
                                    <motion.a
                                        href="/cv/resume-id.pdf"
                                        download
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200"
                                    >
                                        <FaDownload className="w-4 h-4" />
                                        Download CV (ID)
                                    </motion.a>

                                    <motion.a
                                        href="/cv/resume-en.pdf"
                                        download
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700/80 text-white rounded-xl font-medium text-sm shadow-md hover:shadow-lg hover:bg-gray-600 transition-all duration-200 border border-gray-600"
                                    >
                                        <FaDownload className="w-4 h-4" />
                                        Download CV (EN)
                                    </motion.a>
                                </div>
                            </div>

                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <FaCode className="text-green-400 w-4 h-4" />
                                    Tech Highlights
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {techHighlights.map((tech, index) => (
                                        <motion.span
                                            key={tech}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-3 py-1.5 bg-gray-700/80 rounded-full text-xs sm:text-sm text-gray-300 border border-gray-600"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimationWrapper>

                    {/* Right: Experience & Education Timeline */}
                    <div className="lg:col-span-2 space-y-6">
                        <AnimationWrapper delay={0.1}>
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <FaBriefcase className="text-yellow-400 w-4 h-4" />
                                    Experience
                                </h3>
                                <div className="space-y-5">
                                    {experiences.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 }}
                                            className="relative pl-6 border-l border-blue-500"
                                        >
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full" />
                                            <div className="mb-0.5 text-blue-400 text-xs sm:text-sm font-semibold">
                                                {exp.year}
                                            </div>
                                            <h4 className="text-white font-semibold text-sm sm:text-base">
                                                {exp.title}
                                            </h4>
                                            <p className="text-gray-400 text-xs sm:text-sm mb-1">
                                                {exp.company}
                                            </p>
                                            <p className="text-gray-300 text-xs sm:text-sm">
                                                {exp.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper delay={0.2}>
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <FaGraduationCap className="text-purple-400 w-4 h-4" />
                                    Education
                                </h3>
                                <div className="space-y-5">
                                    {educations.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 }}
                                            className="relative pl-6 border-l border-purple-500"
                                        >
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-purple-500 rounded-full" />
                                            <div className="mb-0.5 text-purple-400 text-xs sm:text-sm font-semibold">
                                                {edu.year}
                                            </div>
                                            <h4 className="text-white font-semibold text-sm sm:text-base">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-gray-400 text-xs sm:text-sm mb-1">
                                                {edu.school}
                                            </p>
                                            <p className="text-gray-300 text-xs sm:text-sm">
                                                {edu.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimationWrapper>
                    </div>
                </div>
            </Container>
        </section>
    );
}

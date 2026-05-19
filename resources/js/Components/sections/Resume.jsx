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
        <section id="resume" className="py-24">
            <Container>
                <SectionTitle subtitle="My professional journey">
                    Resume
                </SectionTitle>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Download CV & Highlights */}
                    <AnimationWrapper>
                        <div className="space-y-6">
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <FaBriefcase className="text-blue-400" />
                                    Resume Overview
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Comprehensive resume showcasing my
                                    professional experience, education, and
                                    technical skills.
                                </p>

                                <div className="space-y-4">
                                    <motion.a
                                        href="/cv/resume-id.pdf"
                                        download
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                                    >
                                        <FaDownload className="w-5 h-5" />
                                        Download CV (ID)
                                    </motion.a>

                                    <motion.a
                                        href="/cv/resume-en.pdf"
                                        download
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gray-700/80 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-gray-600 transition-all duration-300 border border-gray-600"
                                    >
                                        <FaDownload className="w-5 h-5" />
                                        Download CV (EN)
                                    </motion.a>
                                </div>
                            </div>

                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <FaCode className="text-green-400" />
                                    Tech Highlights
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {techHighlights.map((tech, index) => (
                                        <motion.span
                                            key={tech}
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            className="px-4 py-2 bg-gray-700/80 rounded-full text-sm text-gray-300 border border-gray-600"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimationWrapper>

                    {/* Right: Experience & Education Timeline */}
                    <div className="lg:col-span-2 space-y-8">
                        <AnimationWrapper delay={0.1}>
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <FaBriefcase className="text-yellow-400" />
                                    Experience
                                </h3>
                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative pl-8 border-l-2 border-blue-500"
                                        >
                                            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
                                            <div className="mb-1 text-blue-400 text-sm font-semibold">
                                                {exp.year}
                                            </div>
                                            <h4 className="text-white font-semibold text-lg">
                                                {exp.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm mb-2">
                                                {exp.company}
                                            </p>
                                            <p className="text-gray-300">
                                                {exp.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper delay={0.2}>
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <FaGraduationCap className="text-purple-400" />
                                    Education
                                </h3>
                                <div className="space-y-6">
                                    {educations.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative pl-8 border-l-2 border-purple-500"
                                        >
                                            <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />
                                            <div className="mb-1 text-purple-400 text-sm font-semibold">
                                                {edu.year}
                                            </div>
                                            <h4 className="text-white font-semibold text-lg">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-gray-400 text-sm mb-2">
                                                {edu.school}
                                            </p>
                                            <p className="text-gray-300">
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

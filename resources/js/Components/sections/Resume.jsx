import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";
import {
    FaDownload,
    FaBriefcase,
    FaGraduationCap,
    FaFileAlt,
    FaAward,
    FaExternalLinkAlt,
} from "react-icons/fa";

const experiences = [
    {
        year: "2025 - 2025",
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

const certificates = [
    {
        year: "2025",
        title: "Certificate of Appreciation",
        issuer: "Internship Program at PT. Arkamaya",
        link: "https://drive.google.com/file/d/1Q4_3DAZSXzo94IJcAm6C2D2JXjV4r4Ir/view?usp=drive_link",
    },
];

export default function Resume() {
    return (
        <section id="resume" className="py-16 sm:py-20 scroll-mt-24">
            <Container>
                <SectionTitle subtitle="My professional journey">
                    Resume
                </SectionTitle>

                <div className="grid lg:grid-cols-3 gap-6">
                    <AnimationWrapper>
                        <div className="space-y-6">
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-800">
                                <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                                    <FaFileAlt className="text-blue-400 w-4 h-4" />
                                    Resume Overview
                                </h3>
                                <p className="text-slate-400 text-sm mb-5">
                                    Comprehensive resume showcasing my professional experience, education, and technical skills.
                                </p>

                                <div className="space-y-3">
                                    <a
                                        href="/cv/resume-id.pdf"
                                        download
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-all duration-150 active:scale-[0.98] hover:-translate-y-0.5"
                                    >
                                        <FaDownload className="w-4 h-4" />
                                        Download CV (ID)
                                    </a>

                                    <a
                                        href="/cv/resume-en.pdf"
                                        download
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/60 text-slate-200 hover:bg-slate-800 rounded-xl font-medium text-sm transition-all duration-150 border border-slate-700 active:scale-[0.98] hover:-translate-y-0.5"
                                    >
                                        <FaDownload className="w-4 h-4" />
                                        Download CV (EN)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimationWrapper>

                    <div className="lg:col-span-2 space-y-6">
                        <AnimationWrapper delay={0.1}>
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-800">
                                <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                                    <FaBriefcase className="text-cyan-400 w-4 h-4" />
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
                                            className="relative pl-6 border-l border-cyan-400/60"
                                        >
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-cyan-500 rounded-full" />
                                            <div className="mb-0.5 text-cyan-400 text-xs sm:text-sm font-semibold">
                                                {exp.year}
                                            </div>
                                            <h4 className="text-slate-100 font-semibold text-sm sm:text-base">
                                                {exp.title}
                                            </h4>
                                            <p className="text-slate-500 text-xs sm:text-sm mb-1">
                                                {exp.company}
                                            </p>
                                            <p className="text-slate-400 text-xs sm:text-sm">
                                                {exp.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper delay={0.2}>
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-800">
                                <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                                    <FaGraduationCap className="text-indigo-400 w-4 h-4" />
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
                                            className="relative pl-6 border-l border-indigo-400/60"
                                        >
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-indigo-500 rounded-full" />
                                            <div className="mb-0.5 text-indigo-400 text-xs sm:text-sm font-semibold">
                                                {edu.year}
                                            </div>
                                            <h4 className="text-slate-100 font-semibold text-sm sm:text-base">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-slate-500 text-xs sm:text-sm mb-1">
                                                {edu.school}
                                            </p>
                                            <p className="text-slate-400 text-xs sm:text-sm">
                                                {edu.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper delay={0.3}>
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-800">
                                <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                                    <FaAward className="text-sky-400 w-4 h-4" />
                                    Certificates
                                </h3>
                                <div className="space-y-5">
                                    {certificates.map((cert, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 }}
                                            className="relative pl-6 border-l border-sky-400/60"
                                        >
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-sky-500 rounded-full" />
                                            <div className="mb-0.5 text-sky-400 text-xs sm:text-sm font-semibold">
                                                {cert.year}
                                            </div>
                                            <h4 className="text-slate-100 font-semibold text-sm sm:text-base">
                                                {cert.title}
                                            </h4>
                                            <p className="text-slate-500 text-xs sm:text-sm mb-3">
                                                {cert.issuer}
                                            </p>
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 text-slate-200 hover:bg-slate-800 hover:text-sky-400 rounded-lg text-xs font-medium transition-all duration-150"
                                            >
                                                <FaExternalLinkAlt className="w-3 h-3" />
                                                View Certificate
                                            </a>
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

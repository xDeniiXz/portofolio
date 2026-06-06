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
                <SectionTitle subtitle="My journey">
                    EXPERIENCE & BACKGROUND
                </SectionTitle>

                <div className="grid lg:grid-cols-3 gap-6">
                    <AnimationWrapper>
                        <div className="space-y-6">
                            <div className="bg-tech-card border border-tech-border p-6">
                                <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-3 flex items-center gap-2 font-mono uppercase tracking-wider">
                                    <FaFileAlt className="text-tech-green w-4 h-4" />
                                    Resume
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm mb-5 font-mono">
                                    Professional experience, education, and technical skills.
                                </p>

                                <div className="space-y-3">
                                    <a
                                        href="/cv/resume-id.pdf"
                                        download
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-tech-green/10 text-tech-green hover:bg-tech-green/20 border border-tech-green/30 font-mono text-xs sm:text-sm transition-all duration-150 active:scale-[0.98]"
                                    >
                                        <span className="font-bold">$</span>
                                        Download CV (ID)
                                    </a>

                                    <a
                                        href="/cv/resume-en.pdf"
                                        download
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-slate-400 hover:text-slate-200 border border-tech-border font-mono text-xs sm:text-sm transition-all duration-150 active:scale-[0.98]"
                                    >
                                        <span className="font-bold">$</span>
                                        Download CV (EN)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimationWrapper>

                    <div className="lg:col-span-2 space-y-6">
                        <AnimationWrapper delay={0.1}>
                            <div className="bg-tech-card border border-tech-border p-6">
                                <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                                    <FaBriefcase className="text-tech-green w-4 h-4" />
                                    Experience
                                </h3>
                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 }}
                                            className="relative pl-6 border-l border-tech-green/30"
                                        >
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-tech-green/50" />
                                            <div className="mb-1 text-tech-green text-xs font-semibold font-mono">
                                                {exp.year}
                                            </div>
                                            <h4 className="text-slate-100 font-semibold text-sm sm:text-base font-mono">
                                                {exp.title}
                                            </h4>
                                            <p className="text-slate-500 text-xs mb-1 font-mono">
                                                {exp.company}
                                            </p>
                                            <p className="text-slate-400 text-xs sm:text-sm font-mono">
                                                {exp.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper delay={0.2}>
                            <div className="bg-tech-card border border-tech-border p-6">
                                <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                                    <FaGraduationCap className="text-tech-green w-4 h-4" />
                                    Education
                                </h3>
                                <div className="space-y-6">
                                    {educations.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 }}
                                            className="relative pl-6 border-l border-tech-green/30"
                                        >
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-tech-green/50" />
                                            <div className="mb-1 text-tech-green text-xs font-semibold font-mono">
                                                {edu.year}
                                            </div>
                                            <h4 className="text-slate-100 font-semibold text-sm sm:text-base font-mono">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-slate-500 text-xs mb-1 font-mono">
                                                {edu.school}
                                            </p>
                                            <p className="text-slate-400 text-xs sm:text-sm font-mono">
                                                {edu.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper delay={0.3}>
                            <div className="bg-tech-card border border-tech-border p-6">
                                <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                                    <FaAward className="text-tech-green w-4 h-4" />
                                    Certificates
                                </h3>
                                <div className="space-y-6">
                                    {certificates.map((cert, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 }}
                                            className="relative pl-6 border-l border-tech-green/30"
                                        >
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-tech-green/50" />
                                            <div className="mb-1 text-tech-green text-xs font-semibold font-mono">
                                                {cert.year}
                                            </div>
                                            <h4 className="text-slate-100 font-semibold text-sm sm:text-base font-mono">
                                                {cert.title}
                                            </h4>
                                            <p className="text-slate-500 text-xs mb-3 font-mono">
                                                {cert.issuer}
                                            </p>
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 py-2 bg-tech-card text-slate-300 hover:text-tech-green border border-tech-border font-mono text-xs transition-all duration-150"
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

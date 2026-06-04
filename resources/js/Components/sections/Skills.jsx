import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";
import {
    FaReact,
    FaCss3Alt,
    FaPhp,
    FaVuejs,
    FaHtml5,
    FaNodeJs,
    FaDocker,
} from "react-icons/fa";
import {
    SiNestjs,
    SiTypescript,
    SiTailwindcss,
    SiVercel,
    SiVite,
    SiLaravel,
    SiMysql,
    SiJavascript,
    SiLaragon,
    SiGitlab,
    SiBootstrap,
} from "react-icons/si";

const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "PHP", icon: FaPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "React", icon: FaReact },
    { name: "Vue", icon: FaVuejs },
    { name: "Node.js", icon: FaNodeJs },
    { name: "NestJS", icon: SiNestjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Vite", icon: SiVite },
    { name: "Vercel", icon: SiVercel },
    { name: "Docker", icon: FaDocker },
    { name: "GitLab", icon: SiGitlab },
    { name: "MySQL", icon: SiMysql },
    { name: "Laragon", icon: SiLaragon },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 sm:py-20 scroll-mt-20">
            <Container>
                <SectionTitle subtitle="Technologies I work with">
                    Full-Stack Tools
                </SectionTitle>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                    {skills.map((skill, index) => (
                        <AnimationWrapper key={skill.name} delay={index * 0.03}>
                            <div
                                className="bg-slate-800/90 rounded-2xl p-4 sm:p-5 text-center border border-slate-700/50 hover:border-slate-600 hover:shadow-lg transition-all duration-150 hover:-translate-y-1 active:scale-[0.98]"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-700/80 text-slate-200 mb-3">
                                    <skill.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <p className="font-medium text-slate-200 text-xs sm:text-sm">
                                    {skill.name}
                                </p>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </Container>
        </section>
    );
}

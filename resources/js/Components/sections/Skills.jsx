import React from "react";
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
        <section id="skills" className="py-16 sm:py-20 scroll-mt-24">
            <Container>
                <SectionTitle subtitle="Tech stack">
                    TOOLS I USE DAILY
                </SectionTitle>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <AnimationWrapper key={skill.name} delay={index * 0.03}>
                            <div className="group relative bg-tech-card border border-tech-border hover:border-tech-green/30 transition-all duration-150 cursor-pointer">
                                <div className="p-4 flex flex-col items-center gap-3">
                                    <div className="inline-flex items-center justify-center w-12 h-12 text-slate-400 group-hover:text-tech-green transition-all duration-150">
                                        <skill.icon className="w-8 h-8" />
                                    </div>
                                    <p className="font-mono text-xs text-slate-400 group-hover:text-tech-green uppercase tracking-wider transition-all duration-150">
                                    {skill.name}
                                </p>
                                </div>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </Container>
        </section>
    );
}

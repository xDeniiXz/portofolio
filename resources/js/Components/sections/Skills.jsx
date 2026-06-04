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
                <SectionTitle subtitle="Technologies I work with">
                    Full-Stack Tools
                </SectionTitle>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                    {skills.map((skill, index) => (
                        <AnimationWrapper key={skill.name} delay={index * 0.03}>
                            <div className="bg-slate-900/80 rounded-xl p-3 sm:p-4 text-center border border-slate-800 hover:border-blue-600 hover:-translate-y-1 transition-all duration-200 cursor-pointer group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-800/80 text-slate-200 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all duration-200 mb-3 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
                                    <skill.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <p className="font-medium text-slate-300 group-hover:text-blue-400 text-xs sm:text-sm transition-all duration-200">
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

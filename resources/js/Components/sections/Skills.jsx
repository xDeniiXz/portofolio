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
    { name: "HTML", icon: FaHtml5, color: "from-orange-500 to-red-500" },
    { name: "CSS", icon: FaCss3Alt, color: "from-blue-500 to-cyan-500" },
    {
        name: "JavaScript",
        icon: SiJavascript,
        color: "from-yellow-400 to-orange-500",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "from-blue-600 to-blue-700",
    },
    { name: "PHP", icon: FaPhp, color: "from-purple-500 to-indigo-500" },
    { name: "Laravel", icon: SiLaravel, color: "from-red-500 to-red-600" },
    { name: "React", icon: FaReact, color: "from-cyan-500 to-blue-500" },
    { name: "Vue", icon: FaVuejs, color: "from-green-500 to-emerald-500" },
    { name: "Node.js", icon: FaNodeJs, color: "from-green-600 to-green-700" },
    { name: "NestJS", icon: SiNestjs, color: "from-red-600 to-pink-600" },
    {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "from-blue-400 to-purple-500",
    },
    {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "from-purple-600 to-indigo-600",
    },
    { name: "Vite", icon: SiVite, color: "from-purple-500 to-yellow-500" },
    { name: "Vercel", icon: SiVercel, color: "from-gray-500 to-gray-600" },
    { name: "Docker", icon: FaDocker, color: "from-blue-500 to-cyan-500" },
    { name: "GitLab", icon: SiGitlab, color: "from-orange-600 to-red-500" },
    { name: "MySQL", icon: SiMysql, color: "from-blue-600 to-indigo-600" },
    {
        name: "Laragon",
        icon: SiLaragon,
        color: "from-indigo-500 to-purple-500",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16">
            <Container>
                <SectionTitle subtitle="Technologies I work with">
                    Full-Stack Tools
                </SectionTitle>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                    {skills.map((skill, index) => (
                        <AnimationWrapper key={skill.name} delay={index * 0.05}>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -3 }}
                                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg text-center border border-gray-700"
                            >
                                <div
                                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${skill.color} text-white mb-2 sm:mb-3 shadow-md`}
                                >
                                    <skill.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <p className="font-medium text-gray-200 text-xs sm:text-sm">
                                    {skill.name}
                                </p>
                            </motion.div>
                        </AnimationWrapper>
                    ))}
                </div>
            </Container>
        </section>
    );
}

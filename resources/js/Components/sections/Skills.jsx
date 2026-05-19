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
        <section id="skills" className="py-24">
            <Container>
                <SectionTitle subtitle="Technologies I work with">
                    Full-Stack Tools
                </SectionTitle>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <AnimationWrapper key={skill.name} delay={index * 0.08}>
                            <motion.div
                                whileHover={{ scale: 1.08, y: -10, rotate: 2 }}
                                className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center border border-gray-700"
                            >
                                <div
                                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} text-white text-2xl font-bold mb-4 shadow-lg`}
                                >
                                    <skill.icon className="w-10 h-10" />
                                </div>
                                <p className="font-semibold text-gray-200 text-lg">
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

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-20 scroll-mt-24">
            <Container>
                <SectionTitle subtitle="About me">
                    PASSIONATE ABOUT BUILDING WEB APPS
                </SectionTitle>

                <AnimationWrapper>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-tech-card border border-tech-border p-6 sm:p-8">
                            <div className="space-y-3 font-mono text-slate-300">
                                <p className="text-sm sm:text-base leading-relaxed">
                                    <span className="text-slate-500">/**</span>
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    * A dedicated Full-Stack Developer with expertise in frontend and backend technologies
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    * turning complex problems into simple, clean, and scalable solutions.
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    * Specializing in creating seamless user experiences with clean, maintainable code.
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    <span className="text-slate-500">*/</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-tech-border">
                                <div className="space-y-1">
                                    <span className="text-slate-500 text-xs uppercase tracking-wider font-mono">Expertise</span>
                                    <p className="text-tech-green font-bold text-sm sm:text-base">Full-Stack</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-slate-500 text-xs uppercase tracking-wider font-mono">Code Style</span>
                                    <p className="text-slate-200 font-bold text-sm sm:text-base">Clean</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-slate-500 text-xs uppercase tracking-wider font-mono">Focus</span>
                                    <p className="text-slate-200 font-bold text-sm sm:text-base">User First</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationWrapper>
            </Container>
        </section>
    );
}

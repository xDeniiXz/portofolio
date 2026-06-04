import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-20 scroll-mt-24">
            <Container>
                <SectionTitle subtitle="Get to know me better">
                    About Me
                </SectionTitle>

                <AnimationWrapper>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
                            <p className="text-xl sm:text-2xl font-semibold text-slate-100 mb-6">
                                Passionate about 
                                <br />
                                <span className="text-blue-400">building modern web applications</span>
                            </p>
                            <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                                A dedicated Full-Stack Developer with expertise in both frontend and backend technologies — turning complex problems into simple, beautiful, and intuitive solutions.
                            </p>
                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                Specializing in creating seamless user experiences that are both functional and visually appealing, with a focus on clean, maintainable code.
                            </p>
                        </div>
                    </div>
                </AnimationWrapper>
            </Container>
        </section>
    );
}

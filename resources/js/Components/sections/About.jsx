import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function About() {
    return (
        <section id="about" className="py-24 bg-gray-900/50">
            <Container>
                <SectionTitle subtitle="Get to know me better">
                    About Me
                </SectionTitle>

                <AnimationWrapper>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-700">
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center">
                                Hi! I'm Mohamad Deni Yulio, a passionate Full
                                Stack Web Developer with expertise in building
                                modern web applications. I love turning complex
                                problems into simple, beautiful, and intuitive
                                solutions.
                            </p>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center">
                                With a strong foundation in both frontend and
                                backend technologies, I strive to create
                                seamless user experiences that are both
                                functional and visually appealing.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed text-center">
                                When I'm not coding, you can find me exploring
                                new technologies, contributing to open source,
                                playing games and livestreaming, or enjoying a
                                great cup of coffee!
                            </p>
                        </div>
                    </div>
                </AnimationWrapper>
            </Container>
        </section>
    );
}

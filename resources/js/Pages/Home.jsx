import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Hero from "../Components/sections/Hero";
import About from "../Components/sections/About";
import Resume from "../Components/sections/Resume";
import Skills from "../Components/sections/Skills";
import Projects from "../Components/sections/Projects";
import Certificate from "../Components/sections/Certificate";
import Contact from "../Components/sections/Contact";

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <About />
            <Resume />
            <Skills />
            <Projects />
            <Certificate />
            <Contact />
        </MainLayout>
    );
}

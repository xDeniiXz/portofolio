import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import Hero from "../Components/sections/Hero";
import About from "../Components/sections/About";
import Resume from "../Components/sections/Resume";
import Skills from "../Components/sections/Skills";
import Projects from "../Components/sections/Projects";
import Contact from "../Components/sections/Contact";

export default function Home() {
    return (
        <MainLayout>
            <Head title="Mohamad Deni Yulio | Full-Stack Developer" />
            <Hero />
            <About />
            <Resume />
            <Skills />
            <Projects />
            <Contact />
        </MainLayout>
    );
}

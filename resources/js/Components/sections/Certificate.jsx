import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

const certificates = [
    {
        id: 1,
        title: "PT. Arkamaya Certificate",
        issuer: "Internship Program",
        year: "2025",
        image: "/images/cert1.jpg",
        link: "https://drive.google.com/file/d/1Q4_3DAZSXzo94IJcAm6C2D2JXjV4r4Ir/view?usp=sharing",
        isEmpty: false,
    },
    {
        id: 2,
        title: "Coming Soon",
        issuer: "Still Empty",
        year: "TBA",
        image: null,
        link: "#",
        isEmpty: true,
    },
    {
        id: 3,
        title: "Coming Soon",
        issuer: "Still Empty",
        year: "TBA",
        image: null,
        link: "#",
        isEmpty: true,
    },
];

const CertificateCard = ({ cert }) => {
    const [hasError, setHasError] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col h-full"
        >
            <div className="relative h-56 overflow-hidden flex-shrink-0 bg-gray-900/30">
                {!cert.isEmpty && !hasError ? (
                    <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <FaAward className="w-16 h-16 text-white/30" />
                        <div className="absolute inset-0 bg-gray-900/30" />
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <p className="text-gray-400 text-sm font-semibold">
                                Still Empty
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Coming Soon
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full">
                        {cert.year}
                    </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                    {cert.title}
                </h3>
                <p className="text-gray-400 mb-4">{cert.issuer}</p>
                <div className="mt-auto">
                    {!cert.isEmpty && (
                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/80 text-gray-300 rounded-xl text-sm font-medium hover:bg-gray-600 transition-colors"
                        >
                            View Certificate
                            <FaExternalLinkAlt className="w-4 h-4" />
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default function Certificate() {
    return (
        <section id="certificates" className="py-24 bg-gray-900/50">
            <Container>
                <SectionTitle subtitle="My achievements & certifications">
                    Certificates
                </SectionTitle>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <AnimationWrapper key={cert.id} delay={index * 0.1}>
                            <CertificateCard cert={cert} />
                        </AnimationWrapper>
                    ))}
                </div>
            </Container>
        </section>
    );
}

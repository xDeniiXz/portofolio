import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Award } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";

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

export default function Certificate() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [hasError, setHasError] = useState({});

    return (
        <section id="certificates" className="py-16 bg-gray-900/50">
            <Container>
                <SectionTitle subtitle="My achievements & certifications">
                    Certificates
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <AnimationWrapper key={cert.id} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-700 group cursor-pointer"
                                onClick={() =>
                                    !cert.isEmpty &&
                                    setSelectedCertificate(cert)
                                }
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900/50">
                                    {!cert.isEmpty && !hasError[cert.id] ? (
                                        <>
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                onError={() =>
                                                    setHasError((prev) => ({
                                                        ...prev,
                                                        [cert.id]: true,
                                                    }))
                                                }
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 text-white">
                                                    <Eye className="w-5 h-5" />
                                                    <span className="font-semibold">
                                                        View Certificate
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                                            <Award className="w-16 h-16 text-gray-600" />
                                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                                <p className="text-gray-500 text-sm font-semibold">
                                                    Still Empty
                                                </p>
                                                <p className="text-gray-600 text-xs mt-1">
                                                    Coming Soon
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <span className="text-xs text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full">
                                        {cert.year}
                                    </span>
                                    <h3 className="text-lg font-semibold text-white mt-3 line-clamp-1">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        {cert.issuer}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimationWrapper>
                    ))}
                </div>
            </Container>

            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedCertificate(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-4xl w-full bg-gray-800/95 backdrop-blur-xl rounded-3xl border border-gray-700 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-gray-900/80 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-1">
                                <img
                                    src={selectedCertificate.image}
                                    alt={selectedCertificate.title}
                                    className="w-full max-h-[80vh] object-contain rounded-2xl"
                                />
                            </div>

                            <div className="p-6 border-t border-gray-700">
                                <div>
                                    <h2 className="text-xl font-bold text-white">
                                        {selectedCertificate.title}
                                    </h2>
                                    <p className="text-gray-400 mt-1">
                                        {selectedCertificate.issuer} •{" "}
                                        {selectedCertificate.year}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

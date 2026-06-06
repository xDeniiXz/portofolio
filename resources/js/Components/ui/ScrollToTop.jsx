import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-tech-green/10 text-tech-green hover:bg-tech-green/20 border border-tech-green/30 flex items-center justify-center transition-colors duration-150"
                >
                    <FaChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            )}
        </AnimatePresence>
    );
}

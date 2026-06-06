import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaSpinner,
    FaInfoCircle,
    FaTimes,
} from "react-icons/fa";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimationWrapper from "../ui/AnimationWrapper";
import Toast from "../ui/Toast";

const COOLDOWN_MINUTES = 30;
const COOLDOWN_KEY = "contactFormCooldown";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showImportantNotice, setShowImportantNotice] = useState(false);
    const [hasReadNotice, setHasReadNotice] = useState(false);
    const [isOnCooldown, setIsOnCooldown] = useState(false);
    const [cooldownTime, setCooldownTime] = useState(0);
    const [toast, setToast] = useState({
        isVisible: false,
        message: "",
        type: "info",
    });

    useEffect(() => {
        const savedCooldown = localStorage.getItem(COOLDOWN_KEY);
        if (savedCooldown) {
            const expirationTime = parseInt(savedCooldown, 10);
            const now = Date.now();
            if (now < expirationTime) {
                setIsOnCooldown(true);
                setCooldownTime(Math.ceil((expirationTime - now) / 1000 / 60));
                const interval = setInterval(() => {
                    const newNow = Date.now();
                    if (newNow >= expirationTime) {
                        setIsOnCooldown(false);
                        setCooldownTime(0);
                        localStorage.removeItem(COOLDOWN_KEY);
                        clearInterval(interval);
                    } else {
                        setCooldownTime(
                            Math.ceil((expirationTime - newNow) / 1000 / 60),
                        );
                    }
                }, 60000);
                return () => clearInterval(interval);
            }
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isOnCooldown) {
            setToast({
                isVisible: true,
                message: `Please wait ${cooldownTime} minutes before sending another message.`,
                type: "warning",
            });
            return;
        }

        setIsSubmitting(true);
        setToast({
            isVisible: true,
            message: "Sending your message...",
            type: "loading",
        });

        try {
            const response = await fetch("https://formspree.io/f/xaqkqjdo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            setIsSubmitting(false);

            if (response.ok) {
                const expirationTime =
                    Date.now() + COOLDOWN_MINUTES * 60 * 1000;
                localStorage.setItem(COOLDOWN_KEY, expirationTime.toString());
                setIsOnCooldown(true);
                setCooldownTime(COOLDOWN_MINUTES);
                setFormData({ name: "", email: "", message: "" });

                setToast({
                    isVisible: true,
                    message: "Message sent successfully! Thank you.",
                    type: "success",
                });
            } else {
                setToast({
                    isVisible: true,
                    message: "Something went wrong. Please try again.",
                    type: "warning",
                });
            }
        } catch (error) {
            setIsSubmitting(false);
            setToast({
                isVisible: true,
                message: "Network error. Please try again.",
                type: "warning",
            });
        }
    };

    const handleToastClose = () => {
        setToast((prev) => ({ ...prev, isVisible: false }));
    };

    return (
        <section id="contact" className="py-16 sm:py-20 scroll-mt-24">
            <Container>
                <SectionTitle subtitle="Get in touch">
                    CONTACT
                </SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <AnimationWrapper>
                        <div className="space-y-6">
                            <div className="bg-tech-card border border-tech-border p-6">
                                <h3 className="text-sm sm:text-base font-semibold mb-6 text-slate-100 font-mono uppercase tracking-wider">
                                    Information
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-tech-card border border-tech-border">
                                            <FaEnvelope className="w-4 h-4 text-tech-green" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                                                Email
                                            </p>
                                            <p className="text-sm sm:text-base font-mono text-slate-300">
                                                mdeniyulio@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-tech-card border border-tech-border">
                                            <FaMapMarkerAlt className="w-4 h-4 text-tech-green" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                                                Location
                                            </p>
                                            <p className="text-sm sm:text-base font-mono text-slate-300">
                                                Bandung, Jawa Barat
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h4 className="text-xs sm:text-sm font-semibold mb-4 text-slate-200 font-mono uppercase tracking-wider">
                                        Social
                                    </h4>
                                    <div className="flex gap-3">
                                        {[
                                            {
                                                icon: FaGithub,
                                                href: "https://github.com/xDeniiXz",
                                            },
                                            {
                                                icon: FaLinkedin,
                                                href: "https://www.linkedin.com/in/mohamad-deni-yulio-754680366?utm_source=share_via&utm_content=profile&utm_medium=member_android2",
                                            },
                                            {
                                                icon: FaInstagram,
                                                href: "https://www.instagram.com/dnii.xz?igsh=cjFkYnJ0cXd5NGlo",
                                            },
                                        ].map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-tech-green border border-tech-border transition-all duration-150 active:scale-[0.95]"
                                            >
                                                <social.icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationWrapper>

                    <AnimationWrapper delay={0.2}>
                        <div className="bg-tech-card border border-tech-border p-6">
                            <h3 className="text-sm sm:text-base font-semibold mb-6 text-slate-100 font-mono uppercase tracking-wider">
                                    Send Message
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-2 font-mono uppercase tracking-wider">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            disabled={
                                                !hasReadNotice || isOnCooldown
                                            }
                                            className="w-full px-4 py-3 bg-tech-card border border-tech-border text-slate-100 placeholder-slate-500 focus:border-tech-green/50 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-mono"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-2 font-mono uppercase tracking-wider">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            disabled={
                                                !hasReadNotice || isOnCooldown
                                            }
                                            className="w-full px-4 py-3 bg-tech-card border border-tech-border text-slate-100 placeholder-slate-500 focus:border-tech-green/50 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-mono"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-2 font-mono uppercase tracking-wider">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            disabled={
                                                !hasReadNotice || isOnCooldown
                                            }
                                            className="w-full px-4 py-3 bg-tech-card border border-tech-border text-slate-100 placeholder-slate-500 focus:border-tech-green/50 transition-all duration-150 resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm font-mono"
                                            placeholder="Your message..."
                                            required
                                        ></textarea>
                                    </div>

                                    {!hasReadNotice && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowImportantNotice(true)
                                            }
                                            className="w-full py-3 bg-tech-green/10 text-tech-green border border-tech-green/30 font-mono text-xs transition-all duration-150 active:scale-[0.98] uppercase tracking-wider hover:bg-tech-green/20"
                                        >
                                            Read Important Notice
                                        </button>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={
                                            !hasReadNotice ||
                                            isOnCooldown ||
                                            isSubmitting
                                        }
                                        className={`w-full py-3 font-mono text-xs transition-all duration-150 flex items-center justify-center gap-2 uppercase tracking-wider ${!hasReadNotice || isOnCooldown || isSubmitting ? "bg-tech-card text-slate-500 border border-tech-border cursor-not-allowed" : "bg-tech-green/10 text-tech-green hover:bg-tech-green/20 border border-tech-green/30 active:scale-[0.98]"}`}
                                    >
                                        {isOnCooldown ? (
                                            <> <FaInfoCircle className="w-3 h-3" /> Wait {cooldownTime} min </>
                                        ) : !hasReadNotice ? (
                                            <> <FaInfoCircle className="w-3 h-3" /> Read Notice First </>
                                        ) : isSubmitting ? (
                                            <> <FaSpinner className="w-3 h-3 animate-spin" /> Sending... </>
                                        ) : (
                                            <> Send Message <FaPaperPlane className="w-3 h-3" /> </>
                                        )}
                                    </button>
                                </form>
                        </div>
                    </AnimationWrapper>

                    <AnimatePresence>
                        {showImportantNotice && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    onClick={() => setShowImportantNotice(false)}
                                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.15 }}
                                    className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
                                >
                                    <div className="pointer-events-auto bg-tech-card border border-tech-border max-w-md w-full">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="bg-slate-800 w-12 h-12 flex items-center justify-center border border-tech-border">
                                                    <FaInfoCircle className="w-6 h-6 text-slate-400" />
                                                </div>
                                                <button
                                                    onClick={() => setShowImportantNotice(false)}
                                                    className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-slate-800"
                                                >
                                                    <FaTimes className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-3 font-mono">
                                                Important Notice
                                            </h3>
                                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 font-mono">
                                                To prevent spam, you can only send one message every 30 minutes. Please review your message carefully before sending.
                                            </p>

                                            <ul className="text-slate-400 text-xs sm:text-sm space-y-2 mb-6 font-mono">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-tech-green mt-0.5">•</span>
                                                    Make sure your email address is correct
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-tech-green mt-0.5">•</span>
                                                    Double-check your message content
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-tech-green mt-0.5">•</span>
                                                    You'll need to complete a simple verification
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-tech-green mt-0.5">•</span>
                                                    After sending, you'll need to wait 30 minutes before sending another message
                                                </li>
                                            </ul>

                                            <button
                                                onClick={() => {
                                                    setHasReadNotice(true);
                                                    setShowImportantNotice(false);
                                                }}
                                                className="w-full py-3 bg-tech-green/10 text-tech-green border border-tech-green/30 font-mono text-xs transition-all duration-150 active:scale-[0.98] uppercase tracking-wider hover:bg-tech-green/20"
                                            >
                                                I Understand
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </Container>

            <Toast
                isVisible={toast.isVisible}
                onClose={handleToastClose}
                message={toast.message}
                type={toast.type}
            />
        </section>
    );
}

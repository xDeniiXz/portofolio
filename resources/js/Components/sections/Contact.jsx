import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone,
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
                <SectionTitle subtitle="Let's work together">
                    Contact Me
                </SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <AnimationWrapper>
                        <div className="space-y-6">
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-800">
                                <h3 className="text-lg sm:text-xl font-semibold mb-6 text-slate-100">
                                    Contact Information
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                            <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Email
                                            </p>
                                            <p className="text-sm sm:text-base font-medium">
                                                mdeniyulio@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                            <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Location
                                            </p>
                                            <p className="text-sm sm:text-base font-medium">
                                                Bandung, Jawa Barat
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h4 className="text-sm sm:text-base font-semibold mb-4 text-slate-200">
                                        Follow Me
                                    </h4>
                                    <div className="flex gap-3">
                                        {[
                                            {
                                                icon: FaGithub,
                                                href: "https://github.com/xDeniiXz",
                                                color: "bg-slate-800/60 hover:bg-slate-800",
                                            },
                                            {
                                                icon: FaLinkedin,
                                                href: "https://www.linkedin.com/in/mohamad-deni-yulio-754680366?utm_source=share_via&utm_content=profile&utm_medium=member_android2",
                                                color: "bg-blue-500/10 hover:bg-blue-500/20",
                                            },
                                            {
                                                icon: FaInstagram,
                                                href: "https://www.instagram.com/dnii.xz?igsh=cjFkYnJ0cXd5NGlo",
                                                color: "bg-purple-500/10 hover:bg-purple-500/20",
                                            },
                                        ].map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-slate-300 transition-all duration-150 active:scale-[0.95] hover:-translate-y-0.5 ${
                                                    social.href.includes("instagram")
                                                        ? "hover:text-purple-400"
                                                        : "hover:text-blue-400"
                                                } ${social.color}`}
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
                        <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-800">
                            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-slate-100">
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-2">
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
                                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-800/60 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-2">
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
                                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-800/60 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-2">
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
                                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-800/60 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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
                                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-all duration-150 active:scale-[0.98] hover:-translate-y-0.5"
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
                                    className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all duration-150 flex items-center justify-center gap-2 ${
                                        !hasReadNotice ||
                                        isOnCooldown ||
                                        isSubmitting
                                            ? "bg-slate-800 text-slate-400 cursor-not-allowed"
                                            : "bg-blue-600 hover:bg-blue-700 text-white active:scale-[0.98] hover:-translate-y-0.5"
                                    }`}
                                >
                                    {isOnCooldown ? (
                                        <>
                                            <FaInfoCircle className="w-4 h-4" />
                                            <span>
                                                Please wait {cooldownTime} min
                                            </span>
                                        </>
                                    ) : !hasReadNotice ? (
                                        <>
                                            <FaInfoCircle className="w-4 h-4" />
                                            <span>
                                                Read Important Notice First
                                            </span>
                                        </>
                                    ) : isSubmitting ? (
                                        <>
                                            <FaSpinner className="w-4 h-4 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <FaPaperPlane className="w-4 h-4" />
                                        </>
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
                                    onClick={() =>
                                        setShowImportantNotice(false)
                                    }
                                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.15 }}
                                    className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
                                >
                                    <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-800 max-w-md w-full overflow-hidden">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="bg-yellow-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                                                    <FaInfoCircle className="w-6 h-6 text-yellow-400" />
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        setShowImportantNotice(
                                                            false,
                                                        )
                                                    }
                                                    className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-slate-800 rounded-lg"
                                                >
                                                    <FaTimes className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                                Important Notice
                                            </h3>
                                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                                To prevent spam, you can only
                                                send one message every 30
                                                minutes. Please review your
                                                message carefully before
                                                sending.
                                            </p>

                                            <ul className="text-slate-300 text-sm space-y-1.5 mb-6">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-0.5">
                                                        •
                                                    </span>
                                                    Make sure your email address
                                                    is correct
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-0.5">
                                                        •
                                                    </span>
                                                    Double-check your message
                                                    content
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-0.5">
                                                        •
                                                    </span>
                                                    You'll need to complete a
                                                    simple verification
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-0.5">
                                                        •
                                                    </span>
                                                    After sending, you'll need
                                                    to wait 30 minutes before
                                                    sending another message
                                                </li>
                                            </ul>

                                            <button
                                                onClick={() => {
                                                    setHasReadNotice(true);
                                                    setShowImportantNotice(
                                                        false,
                                                    );
                                                }}
                                                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-all duration-150 active:scale-[0.98] hover:-translate-y-0.5"
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

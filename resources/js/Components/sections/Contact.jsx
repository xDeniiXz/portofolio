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
        <section id="contact" className="py-24">
            <Container>
                <SectionTitle subtitle="Let's work together">
                    Contact Me
                </SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    <AnimationWrapper>
                        <div className="space-y-6">
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-700">
                                <h3 className="text-3xl font-bold mb-8 text-gray-100">
                                    Contact Information
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4 text-gray-300">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                            <FaEnvelope className="w-7 h-7 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Email
                                            </p>
                                            <p className="text-lg font-medium">
                                                mdeniyulio@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 text-gray-300">
                                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                                            <FaMapMarkerAlt className="w-7 h-7 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Location
                                            </p>
                                            <p className="text-lg font-medium">
                                                Bandung, Jawa Barat
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h4 className="text-xl font-semibold mb-6 text-gray-200">
                                        Follow Me
                                    </h4>
                                    <div className="flex space-x-4">
                                        {[
                                            {
                                                icon: FaGithub,
                                                href: "https://github.com/xDeniiXz",
                                                color: "bg-gray-700/50 hover:bg-gray-700",
                                            },
                                            {
                                                icon: FaLinkedin,
                                                href: "https://www.linkedin.com/in/mohamad-deni-yulio-754680366?utm_source=share_via&utm_content=profile&utm_medium=member_android2",
                                                color: "bg-blue-500/10 hover:bg-blue-500/20",
                                            },
                                            {
                                                icon: FaInstagram,
                                                href: "https://www.instagram.com/dnii.xz?igsh=cjFkYnJ0cXd5NGlo",
                                                color: "bg-pink-500/10 hover:bg-pink-500/20",
                                            },
                                        ].map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{
                                                    scale: 1.15,
                                                    y: -5,
                                                }}
                                                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300`}
                                            >
                                                <social.icon className="w-7 h-7" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationWrapper>

                    <AnimationWrapper delay={0.2}>
                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-700">
                            <h3 className="text-3xl font-bold mb-8 text-gray-100">
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-3">
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
                                        className="w-full px-5 py-4 rounded-2xl border border-gray-700 bg-gray-900/50 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-3">
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
                                        className="w-full px-5 py-4 rounded-2xl border border-gray-700 bg-gray-900/50 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-3">
                                        Message
                                    </label>
                                    <textarea
                                        rows={6}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        disabled={
                                            !hasReadNotice || isOnCooldown
                                        }
                                        className="w-full px-5 py-4 rounded-2xl border border-gray-700 bg-gray-900/50 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                                    >
                                        Read Important Notice
                                    </button>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={
                                        !hasReadNotice ||
                                        isOnCooldown ||
                                        isSubmitting
                                    }
                                    whileHover={
                                        hasReadNotice &&
                                        !isOnCooldown &&
                                        !isSubmitting
                                            ? { scale: 1.02 }
                                            : {}
                                    }
                                    whileTap={
                                        hasReadNotice &&
                                        !isOnCooldown &&
                                        !isSubmitting
                                            ? { scale: 0.98 }
                                            : {}
                                    }
                                    className={`w-full py-5 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                                        !hasReadNotice ||
                                        isOnCooldown ||
                                        isSubmitting
                                            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                    }`}
                                >
                                    {isOnCooldown ? (
                                        <>
                                            <FaInfoCircle className="w-5 h-5" />
                                            <span>
                                                Please wait {cooldownTime} min
                                            </span>
                                        </>
                                    ) : isSubmitting ? (
                                        <>
                                            <FaSpinner className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : !hasReadNotice ? (
                                        <>
                                            <FaInfoCircle className="w-5 h-5" />
                                            <span>
                                                Read Important Notice First
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <FaPaperPlane className="w-5 h-5" />
                                        </>
                                    )}
                                </motion.button>
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
                                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.15 }}
                                    className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
                                >
                                    <div className="pointer-events-auto bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 max-w-md w-full overflow-hidden">
                                        <div className="p-8">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="bg-yellow-500/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                                                    <FaInfoCircle className="w-10 h-10 text-yellow-400" />
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        setShowImportantNotice(
                                                            false,
                                                        )
                                                    }
                                                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-xl"
                                                >
                                                    <FaTimes className="w-5 h-5" />
                                                </button>
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-100 mb-4">
                                                Important Notice
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed mb-6">
                                                To prevent spam, you can only
                                                send one message every 30
                                                minutes. Please review your
                                                message carefully before
                                                sending.
                                            </p>

                                            <ul className="text-gray-300 space-y-2 mb-8">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-1">
                                                        •
                                                    </span>
                                                    Make sure your email address
                                                    is correct
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-1">
                                                        •
                                                    </span>
                                                    Double-check your message
                                                    content
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-1">
                                                        •
                                                    </span>
                                                    You'll need to complete a
                                                    simple verification
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-1">
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
                                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
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

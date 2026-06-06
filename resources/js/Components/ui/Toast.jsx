import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaCheckCircle,
    FaExclamationCircle,
    FaInfoCircle,
    FaTimes,
    FaSpinner,
} from "react-icons/fa";

const Toast = ({ isVisible, onClose, message, type = "info", title }) => {
    const icons = {
        info: <FaInfoCircle className="w-6 h-6" />,
        success: <FaCheckCircle className="w-6 h-6" />,
        warning: <FaExclamationCircle className="w-6 h-6" />,
        loading: <FaSpinner className="w-6 h-6 animate-spin" />,
    };

    const colors = {
        info: "text-slate-400",
        success: "text-tech-green",
        warning: "text-yellow-400",
        loading: "text-tech-green",
    };

    const defaultTitle = {
        info: "INFO",
        success: "SUCCESS",
        warning: "WARNING",
        loading: "PLEASE WAIT",
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={type !== "loading" ? onClose : undefined}
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
                                    <div className="w-12 h-12 bg-tech-card border border-tech-border flex items-center justify-center">
                                        <div className={colors[type]}>
                                            {icons[type]}
                                        </div>
                                    </div>
                                    {type !== "loading" && (
                                        <button
                                            onClick={onClose}
                                            className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-slate-800"
                                        >
                                            <FaTimes className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-2 font-mono uppercase tracking-wider">
                                    {title || defaultTitle[type]}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-mono">
                                    {message}
                                </p>

                                {type !== "loading" && (
                                    <button
                                        onClick={onClose}
                                        className="mt-6 w-full py-3 bg-tech-green/10 text-tech-green border border-tech-green/30 font-mono text-sm transition-all duration-150 uppercase tracking-wider active:scale-[0.98]"
                                    >
                                        Got it
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Toast;

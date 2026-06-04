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
        info: "text-blue-400",
        success: "text-green-400",
        warning: "text-yellow-400",
        loading: "text-blue-400",
    };

    const bgColors = {
        info: "bg-blue-500/10",
        success: "bg-green-500/10",
        warning: "bg-yellow-500/10",
        loading: "bg-blue-500/10",
    };

    const defaultTitle = {
        info: "Information",
        success: "Success",
        warning: "Warning",
        loading: "Please Wait",
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
                                    <div
                                        className={`${bgColors[type]} w-12 h-12 rounded-xl flex items-center justify-center`}
                                    >
                                        <div className={colors[type]}>
                                            {icons[type]}
                                        </div>
                                    </div>
                                    {type !== "loading" && (
                                        <button
                                            onClick={onClose}
                                            className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-slate-800 rounded-lg"
                                        >
                                            <FaTimes className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-2">
                                    {title || defaultTitle[type]}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {message}
                                </p>

                                {type !== "loading" && (
                                    <button
                                        onClick={onClose}
                                        className="mt-6 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm shadow-lg shadow-blue-600/20 transition-all duration-200"
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

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
        info: <FaInfoCircle className="w-10 h-10" />,
        success: <FaCheckCircle className="w-10 h-10" />,
        warning: <FaExclamationCircle className="w-10 h-10" />,
        loading: <FaSpinner className="w-10 h-10 animate-spin" />,
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
                                    <div
                                        className={`${bgColors[type]} w-16 h-16 rounded-2xl flex items-center justify-center`}
                                    >
                                        <div className={colors[type]}>
                                            {icons[type]}
                                        </div>
                                    </div>
                                    {type !== "loading" && (
                                        <button
                                            onClick={onClose}
                                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-xl"
                                        >
                                            <FaTimes className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                                    {title || defaultTitle[type]}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {message}
                                </p>

                                {type !== "loading" && (
                                    <button
                                        onClick={onClose}
                                        className="mt-8 w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
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

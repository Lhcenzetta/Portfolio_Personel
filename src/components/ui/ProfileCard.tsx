"use client";

import { motion } from "framer-motion";

import CountUp from "@/components/ui/CountUp";

export default function ProfileCard() {
    const technologies = [
        "Python",
        "FastAPI",
        "Scikit-learn",
        "PyTorch",
        "Next.js",
        "Docker",
        "MLflow",
        "Azure Cloud",
        "OpenTelemetry"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-md ml-auto bg-zinc-900/40 lg:bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[24px] p-6 shadow-2xl shadow-emerald-500/5 overflow-hidden group"
        >
            {/* Background Decor - Animated */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full -mr-20 -mt-20 group-hover:bg-emerald-500/20 transition-colors duration-500"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full -ml-20 -mb-20 group-hover:bg-blue-500/20 transition-colors duration-500"
            />

            {/* Header */}
            <div className="relative flex items-center gap-4 mb-6">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="h-16 w-16 rounded-full overflow-hidden border border-white/20 shadow-xl shrink-0 group-hover:border-emerald-500/50 transition-all duration-500"
                >
                    <img
                        src="/profile.png"
                        alt="Lahcen Ait Zetta"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="w-full">
                    <h3 className="text-lg font-bold text-white leading-tight mb-1.5 group-hover:text-emerald-400 transition-colors">Lahcen Ait zetta</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm">AI & Machine Learning Developer</p>

                    {/* Desktop Badge */}
                    <div className="hidden lg:inline-flex items-center gap-2 mt-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-inner">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-emerald-400">Available for work</span>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

            {/* Technologies */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + (idx * 0.05) }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(16, 185, 129, 0.15)",
                                borderColor: "rgba(16, 185, 129, 0.4)",
                                color: "#34d399"
                            }}
                            className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-zinc-300 transition-all duration-200 cursor-default"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                    { val: 1, label: "Years", sub: "Experience", full: "1+ Year" },
                    { val: 15, label: "Projects", sub: "Completed", full: "15+ Projects" },
                    { val: 2, label: "Clients", sub: "Worldwide", full: "2+ Clients" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        className={`${i === 2 ? 'hidden lg:block' : ''} bg-white/5 rounded-xl p-3 text-center border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group/stat`}
                    >
                        <div className="text-xl lg:text-2xl font-bold text-white mb-0.5 group-hover/stat:text-emerald-400 transition-colors">
                            <CountUp end={stat.val} suffix="+" />
                        </div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </motion.div>
    );
}
